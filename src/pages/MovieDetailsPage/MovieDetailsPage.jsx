import { fetchMovieDetails } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { Button } from 'react-scroll';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  return (
    <>
      <Link to={backLinkHref}>
        <Button text="Go Back" />
      </Link>

      <div className={css.movieDetailsContainer}>
        <img
          className={css.image}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : `https://fakeimg.pl/600x400?text=No+Image+Available`
          }
          alt={movieDetails.title}
        />

        <div className={css.movieDetailsWrap}>
          <h1 className={css.movieTitle}>{movieDetails.title}</h1>
          <h4 className={css.userScore}>
            User score: {Math.round(movieDetails.vote_average * 10)}%
          </h4>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span>{genre.name}</span>
            ))}
          </p>
        </div>
      </div>

      <hr />
      <h3 className={css.additionalInfo}>Additional Information</h3>

      <Link to="cast">
        <Button text="Cast" />
      </Link>

      <Link to="reviews">
        <Button text="Reviews" />
      </Link>
      <hr />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
