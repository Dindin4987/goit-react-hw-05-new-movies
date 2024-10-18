import { fetchMovieDetails } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
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

      <div>
        <img
          className={css.image}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : `https://fakeimg.pl/600x400?text=No+Image+Available`
          }
          alt={movieDetails.title}
        />

        <div>
          <h1>{movieDetails.title}</h1>
          <h4>User score: {Math.round(movieDetails.vote_average * 10)}%</h4>
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
      <h3>Additional Information</h3>

      <Link>
        <Button />
      </Link>

      <Link>
        <Button />
      </Link>
      <hr />
    </>
  );
};

export default MovieDetailsPage;
