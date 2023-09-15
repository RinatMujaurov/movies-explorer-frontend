import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Preloader from "../../components/Preloader/Preloader";
import "./Movies.css";

function Movies({
  movies,
  onMoviesSearch,
  onMovieSave,
  onMovieDelete,
  savedMovies,
  showMovies,
  message,
  isError,
  isPreloader
}) {
  const [initialCardsCount, setInitialCardsCount] = React.useState(12);
  const [cardsToAddCount, setCardsToAddCount] = React.useState(3);
  const [visibleMoviesCount, setVisibleMoviesCount] = React.useState(initialCardsCount);
  const moviesToRender = movies.slice(0, visibleMoviesCount);
  const isMoreButtonVisible = moviesToRender.length < movies.length;
  const searchText = localStorage.getItem("searchData");

  React.useEffect(() => {
    showMovies();
  }, [showMovies]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 679) {
        setInitialCardsCount(5);
        setCardsToAddCount(2);
      } else if (window.innerWidth <= 899) {
        setInitialCardsCount(8); // 8 карточек для 4 рядов при ширине 768px
        setCardsToAddCount(2);   // 2 карточки для дополнительного ряда
      } else {
        setInitialCardsCount(12); // 16 карточек для 4 рядов при ширине 1280px
        setCardsToAddCount(3);    // 4 карточки для дополнительного ряда
      }
      setVisibleMoviesCount(initialCardsCount); // Обновляем состояние с учетом нового начального значения
    };

    handleResize(); // Установка начального значения при первом рендере

    window.addEventListener("resize", handleResize); // Добавление обработчика изменения размера окна

    return () => {
      window.removeEventListener("resize", handleResize); // Удаление обработчика при размонтировании компонента
    };
  }, [initialCardsCount]);

  const handleLoadMore = () => {
    setVisibleMoviesCount(visibleMoviesCount + cardsToAddCount);
  };

  return (
	<>
	  <SearchForm onMoviesSearch={onMoviesSearch} searchText={searchText} location="movies" />
	  {isPreloader ? (
		 <Preloader /> // Отображение прелоадера, если идет загрузка
	  ) : (
		 <MoviesCardList
			movies={moviesToRender}
			onMovieSave={onMovieSave}
			onMovieDelete={onMovieDelete}
			onMoreButtonClick={handleLoadMore}
			isMoreButtonVisible={isMoreButtonVisible}
			savedMovies={savedMovies}
			message={message}
			isError={isError}
			searchText={searchText}
			location="movies"
		 />
	  )}
	</>
 );
}

export default Movies;
