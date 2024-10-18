import { fetchTrendingMovies } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {trendingMovies.length === 0 ? (
        <Loader />
      ) : (
        <MovieList movies={trendingMovies} />
      )}
    </div>
  );
};

export default HomePage;
