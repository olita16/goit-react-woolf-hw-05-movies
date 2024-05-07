import { Suspense, useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import FetchMovieDetails from 'services/MovieDetailApi';

const MovieDetails = () => {
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/');

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const movieData = await FetchMovieDetails(movieId);
        setMovie(movieData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Back</Link>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {movie && (
            <>
              <h2>{movie.title}</h2>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title}
              />

              <h3>Popularity:</h3>
              <p>{movie.popularity}</p>
              <h3>Genres:</h3>
              <p>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </p>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
              <h4>More information:</h4>
              <ul>
                <li>
                  <Link to="credits">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
              <Suspense>
                <Outlet />
              </Suspense>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MovieDetails;