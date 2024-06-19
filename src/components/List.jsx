import React from 'react';
import Card from './Card';
import '../styles/index.css';

const List = ({ movies }) => {
  return (
    <div className="movie-list">  
      {movies.map(movie => (
        <Card key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default List;
