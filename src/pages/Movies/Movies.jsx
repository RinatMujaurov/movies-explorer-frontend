import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";

import './Movies.css';
import { moviesData } from "../../utils/data";

function Movies() {
	return(
		<>
			<SearchForm />
			<MoviesCardList moviesData={moviesData}/>
		</>
	)
}

export default Movies;