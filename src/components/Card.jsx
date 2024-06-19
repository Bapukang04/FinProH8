import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const  Card = ({ movie }) => {
  return (
    
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    
      <div className="movie-card">
        <Link to={`/movie/${movie.imdbID}`} className="text-decoration-none">
          <div className="image-container">
            <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text text-muted">{movie.Year}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
