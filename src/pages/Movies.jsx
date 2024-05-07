import React, { useEffect, useState } from 'react';
import FetchSearch from 'services/SearchApi';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
import Form from 'components/Form';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query.trim() !== '') {
        try {
          const response = await FetchSearch(query);
          setMovies([...response.results]);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <Form value={query} setSearchParams={setSearchParams} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesSearch;