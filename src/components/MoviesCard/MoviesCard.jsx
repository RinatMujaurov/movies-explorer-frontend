import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ movieData }) { 
	const [isLiked, setIsLiked] = useState(false);

	const handleLikeClick = () => {
	  setIsLiked(!isLiked);
	};
  return (
   <li className="movie-card">
      <img className="movie-card__image" src={movieData.link} alt={movieData.title} />
      <button
        className={`button-hover movie-card__like ${isLiked ? 'movie-card__like_active' : ''} ${movieData.delete}`}
        type="button"
        onClick={handleLikeClick}
      ></button>
      <div className='movie-card__info'>
        <h2 className="movie-card__title">{movieData.title}</h2>
        <p className="movie-card__duration">{movieData.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
