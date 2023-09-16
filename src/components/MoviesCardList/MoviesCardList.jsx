import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  location,
  onMovieSave,
  onMovieDelete,
  onMoreButtonClick,
  isMoreButtonVisible = false,
  savedMovies,
  message,
  isError,
  searchText,
}) {
  return (
    <section className="movies-cards">
      {movies.length > 0 ? (
        <ul className="movies-card-list">
          {movies.map((movie) => {
            let isLiked = true;
            if (location === 'movies') {
              isLiked = savedMovies.some(savedMovie => savedMovie.movieId === movie.id)
            }
            return (
              <MoviesCard
                key={movie._id || movie.id}
                movieData={movie}
                onMovieSave={onMovieSave}
                onMovieDelete={onMovieDelete}
                isLiked={isLiked}
                location={location}
              />
            );
          })}
        </ul>
      ) : isError ? (
        <p className='movie-card-list__message'>{message}</p>
      ) : searchText || location === 'savedMovies' ? (
        <p className='movie-card-list__message'>Ничего не найдено</p>
        ) : ''}
      <div className="load-more-block">
        {isMoreButtonVisible && (
          <button
            className="button-hover load-more-block__button"
            onClick={onMoreButtonClick}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
