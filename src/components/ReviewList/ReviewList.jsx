import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/api';
import { ReviewListItem } from '../ReviewListItem/ReviewListItem';
import css from './ReviewList.module.css';

const ReviewList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchMovieReviews(movieId);
        setReviews(res);
      } catch (error) {
        console.error(err);
      }
    })();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <div>We don't have any reviews for this movie.</div>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <ReviewListItem key={id} author={author} content={content} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewList;
