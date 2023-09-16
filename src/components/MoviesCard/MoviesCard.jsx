import React from 'react';
import './MoviesCard.css';
import { Link } from 'react-router-dom';

function MoviesCard({ movieData, location, onMovieSave, onMovieDelete, isLiked }) { 
  const {nameRU, duration, trailerLink} = movieData;
  const image = location === 'movies' ? `https://api.nomoreparties.co${movieData.image.url}` : movieData.image;

  const handleLikeClick = () => {
    const currentId = location === 'movies' ? movieData.id : movieData.movieId;
    isLiked ? onMovieDelete(currentId) : onMovieSave(movieData);
  };

  return (
    <li className="movie-card">
      <Link to={trailerLink} target='_blank' className='movie-card__trailer-link'/>
      <img className="movie-card__image" src={image} alt={nameRU} />
      <button
        className={`button-hover movie-card__like ${isLiked && 'movie-card__like_active'} ${location === 'savedMovies' && 'movie-card__delete'}`}
        type="button"
        onClick={handleLikeClick}
      ></button>
      <div className='movie-card__info'>
        <h2 className="movie-card__title">{nameRU}</h2>
        <p className="movie-card__duration">{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
