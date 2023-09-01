import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import { savedMoviesData } from "../../utils/data.js";
import './SavedMovies.css';

function SavedMovies() {
	return(
		<>
			<SearchForm />
			<MoviesCardList moviesData={savedMoviesData} />
		</>
	)
}

export default SavedMovies;