import { fetchMovieByQuery } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const movies = await fetchMovieByQuery(movieName);
        setSearchResults(movies);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieName]);

  return (
    <div>
      <SearchBar value={movieName} onChange={updateQueryString} />
      {isLoading ? (
        <Loader />
      ) : movieName && searchResults.length === 0 ? (
        <h2>Nothing Found!</h2>
      ) : (
        <MovieList movies={searchResults} />
      )}
    </div>
  );
};

export default MoviesPage;
