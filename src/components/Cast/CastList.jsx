import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/api';
import { CastListItem } from 'components/CastListItem/CastListItem';

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const res = await fetchMovieCast(movieId);
        setCast(res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 ? (
        <div>
          <h2>Movie Cast</h2>
          <ul>
            {cast.map(({ id, profile_path, original_name, name }) => (
              <CastListItem
                key={id}
                id={id}
                profilePath={profile_path}
                originalName={original_name}
                name={name}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div>We don't have any cast for this movie.</div>
      )}
    </>
  );
};

export default CastList;
