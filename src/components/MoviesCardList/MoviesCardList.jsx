import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ moviesData }) {
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(12);
  const totalMoviesCount = moviesData.length;

  useEffect(() => {
	const handleResize = () => {
	  if (window.innerWidth < 679) {
		 setVisibleMoviesCount(5);
	  } else {
		 setVisibleMoviesCount(12);
	  }
	};

	handleResize(); // Установка видимого количества карточек при первом рендере

	window.addEventListener('resize', handleResize); // Добавление обработчика изменения размера окна

	return () => {
	  window.removeEventListener('resize', handleResize); // Удаление обработчика при размонтировании компонента
	};
 }, []);

  const handleLoadMore = () => {
    setVisibleMoviesCount(visibleMoviesCount + 3);
  };

  return (
    <section className='movies-cards'>
      <ul className="movies-card-list">
        {moviesData.slice(0, visibleMoviesCount).map((movie) => (
          <MoviesCard key={movie.movieId} movieData={movie} />
        ))}
      </ul>
		<div className='load-more-block'>
			{visibleMoviesCount < totalMoviesCount && (
        <button className="button-hover load-more-block__button" onClick={handleLoadMore}>
          Ещё
        </button>
      )}
		</div>
    </section>
  );
}

export default MoviesCardList;