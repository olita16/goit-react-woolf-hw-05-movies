import { useEffect, useState } from 'react';
import { getReviews } from 'services/MovieReviewApi';

const useReviews = movieId => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (movieId) {
      getReviews(movieId).then(response => {
        setReviews([...response.results]);
      });
    }
  }, [movieId]);

  return { reviews };
};

export default useReviews;