import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({
  savedMovies,
  onMovieDelete,
  onSavedMoviesSearch,
}) {
  return (
    <>
      <SearchForm
        onSavedMoviesSearch={onSavedMoviesSearch}
        location="savedMovies"
      />
      <MoviesCardList
        movies={savedMovies}
        onMovieDelete={onMovieDelete}
        location="savedMovies"
      />
    </>
  );
}

export default SavedMovies;
