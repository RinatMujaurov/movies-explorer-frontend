import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  const [inputText, setInputText] = useState('');
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          className={`button-hover search-form__button ${inputText ? 'search-form__button-active' : ''}`}
          type="submit"
        >
         
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;

