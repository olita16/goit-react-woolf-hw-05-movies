import React, { useState, useEffect } from 'react';

import FetchMoviesList from 'services/MoviesListApi';
import MoviesList from '../components/MoviesList';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const { movies } = await FetchMoviesList();
        const formattedMovies = movies.map(movie => ({
          id: movie.id,
          title: movie.title || movie.name,
          poster_path: movie.poster_path,
        }));
        setMovies(formattedMovies);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <Title>Trending movies</Title>
      {isLoading ? <p>Loading...</p> : <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;