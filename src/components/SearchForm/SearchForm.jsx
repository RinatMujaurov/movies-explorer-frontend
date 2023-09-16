import React, { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import "./SearchForm.css";

function SearchForm({
  onMoviesSearch,
  searchText = "",
  onSavedMoviesSearch,
  shortMoviesCheckedState = false, 
  location
}) {
  const { values, handleChange, errors, isValid } =
    useFormAndValidation({ search: searchText || "" });

  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(shortMoviesCheckedState);

  const handleCheckboxChange = () => {
    setIsShortMoviesChecked(prev => !prev);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!isValid) return;
 
    if (location === "savedMovies" && onSavedMoviesSearch) {
      onSavedMoviesSearch(values.search, isShortMoviesChecked);
    } else {
      onMoviesSearch(values.search, isShortMoviesChecked);
    }
  };
  
  useEffect(() => {
    if (isShortMoviesChecked !== undefined) {
      handleSubmit();
    }
  }, [isShortMoviesChecked]); 

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <input
          className={`search-form__input ${
            errors.search ? "search-form__input-error" : ""
          }`}
          type="text"
          placeholder="Фильм"
          name="search"
          minLength={0}
          value={values.search}
          onChange={handleChange}
          required
          autoFocus
        />
        <button
          className={`button-hover search-form__button ${
            values.search ? "search-form__button-active" : ""
          }`}
          type="submit"
          disabled={!isValid}
        ></button>
      </div>
      {errors.search && (
        <span className="search-form__error">{errors.search}</span>
      )}
      <FilterCheckbox
        isChecked={isShortMoviesChecked}
        onChange={handleCheckboxChange}
      />
    </form>
  );
}

export default SearchForm;
