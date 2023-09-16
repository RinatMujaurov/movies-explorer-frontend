import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Preloader from "../../components/Preloader/Preloader";
import "./Movies.css";
import { CARD_COUNT_TO_ADD_DESC, CARD_COUNT_TO_ADD_MOBILE, INITIAL_CARDS_COUNT_DESCTOP, INITIAL_CARDS_COUNT_MOBILE, INITIAL_CARDS_COUNT_TAB, MOBILE_WIDTH, TAB_WIDTH } from "../../utils/constants/movie-constants";

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
  const [initialCardsCount, setInitialCardsCount] = React.useState(INITIAL_CARDS_COUNT_DESCTOP);
  const [cardsToAddCount, setCardsToAddCount] = React.useState(CARD_COUNT_TO_ADD_DESC);
  const [visibleMoviesCount, setVisibleMoviesCount] = React.useState(initialCardsCount);
  const moviesToRender = movies.slice(0, visibleMoviesCount);
  const isMoreButtonVisible = moviesToRender.length < movies.length;
  const searchText = localStorage.getItem("searchData");
  const shortMoviesCheckedState = localStorage.getItem('isShortMoviesChecked') === 'true' ? true : false;

  React.useEffect(() => {
    showMovies();
  }, [showMovies]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MOBILE_WIDTH) {
        setInitialCardsCount(INITIAL_CARDS_COUNT_MOBILE);
        setCardsToAddCount(CARD_COUNT_TO_ADD_MOBILE);
      } else if (window.innerWidth <= TAB_WIDTH) {
        setInitialCardsCount(INITIAL_CARDS_COUNT_TAB); // 8 карточек для 4 рядов при ширине 768px
        setCardsToAddCount(CARD_COUNT_TO_ADD_MOBILE);   // 2 карточки для дополнительного ряда
      } else {
        setInitialCardsCount(INITIAL_CARDS_COUNT_DESCTOP); // 16 карточек для 4 рядов при ширине 1280px
        setCardsToAddCount(CARD_COUNT_TO_ADD_DESC);    // 4 карточки для дополнительного ряда
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
	  <SearchForm onMoviesSearch={onMoviesSearch} searchText={searchText} shortMoviesCheckedState={shortMoviesCheckedState} location="movies" />
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
