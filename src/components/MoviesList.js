import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledLi,
  StyledMovieLink,
  StyledMoviesList,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  return (
    <StyledMoviesList>
      {movies.map(movie => (
        <StyledMovieLink
          key={movie.id}
          to={`/movies/${movie.id}`}
          state={{ from: location }}
        >
          <StyledLi>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
              width="185"
            />
            <b>{movie.title}</b>
          </StyledLi>
        </StyledMovieLink>
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;