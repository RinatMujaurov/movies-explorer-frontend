import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import './SearchForm.css';

function SearchForm() {
	const {
		values,
		handleChange,
		errors,
		isValid,
		setValues,
		setIsValid,
	 } = useFormAndValidation();

  const [inputText, setInputText] = useState('');


  const handleSubmit = (e) => {
		e.preventDefault();
		// код сабмита
	 };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <input
          className={`search-form__input ${errors.search ? 'search-form__input-error' : ''}`}
          type="text"
          placeholder="Фильм"
          name="search"
          minLength={2}
          value={values.search || ''}
          onChange={handleChange}
          required 
          autoFocus
        />
        <button
          className={`button-hover search-form__button ${values.search ? 'search-form__button-active' : ''}`}
          type="submit"
          disabled={!isValid}
        >
        </button>
      </div>
      {errors.search && <span className="search-form__error">{errors.search}</span>}
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;

