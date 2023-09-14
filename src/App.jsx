import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Movies from "./pages/Movies/Movies";
import SavedMovies from "./pages/SavedMovies/SavedMovies";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import * as Auth from "./utils/Auth";
import mainApi from "./utils/MainApi";
import moviesApi from "./utils/MoviesApi";
import CurrentUserContext from "./contexts/CurrentUserContext";
import Preloader from "./components/Preloader/Preloader";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getAllMovies = async () => {
    try {
      const allMovies = localStorage.getItem("allMovies");
      if (allMovies) {
        const movies = JSON.parse(allMovies);
        setMovies(movies);
        return movies;
      }
      try {
        const films = await moviesApi.getInitialMovies();
        setMovies(films);
        localStorage.setItem("allMovies", JSON.stringify(films));
        return films;
      } catch (err) {
        handleApiError(err);
      }
    } catch (error) {
      console.error("Error in getAllMovies function: ", error);
      return null;
    }
  };

  const getSavedMovies = async () => {
    try {
      const savedMovies = localStorage.getItem("savedMovies");
      if (!savedMovies) {
        try {
          const films = await mainApi.getSavedMovies();
          setSavedMovies(films);
          localStorage.setItem("savedMovies", JSON.stringify(films));
        } catch (err) {
          handleApiError(err);
        }
      } else {
        setSavedMovies(JSON.parse(savedMovies));
      }
    } catch (error) {
      console.error(error);
      handleApiError(error);
    }
  };
  
  const handleApiError = (err) => {
    setIsError(true);
    setMessage(
      "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
    );
    console.error(err);
  };
  

  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn]);

  const saveMovie = async (film) => {
    try {
      const res = await mainApi.postMovie(film);
      setSavedMovies((currentMovies) => {
        const newMovies = [...currentMovies, res];
        localStorage.setItem("savedMovies", JSON.stringify(newMovies));
        return newMovies;
      });
    } catch (err) {
      setIsError(true);
      setMessage("Не удалось сохранить фильм");
      console.error(err);
    }
  };
  
  const deleteMovie = async (movieId) => {
    try {
      const movieToDelete = savedMovies.find((film) => film.movieId === movieId);
      if (!movieToDelete) {
        throw new Error('Фильм для удаления не найден');
      }
      
      await mainApi.deleteMovie(movieToDelete._id);
      
      setSavedMovies((currentMovies) => {
        const newMovies = currentMovies.filter(
          (film) => film.movieId !== movieId
        );
        localStorage.setItem("savedMovies", JSON.stringify(newMovies));
        return newMovies;
      });
    } catch (err) {
      setIsError(true);
      setMessage("Не удалось удалить фильм");
      console.error(err);
    }
  };

  const handleMoviesSearch = useCallback(
    async (searchText, isShortMoviesChecked) => {
      try {
        const films = await getAllMovies();

        if (films && films.length > 0) {
          const textToLowerCase = searchText.toLowerCase();
          const filteredMovies = films.filter((movie) => {
            return (
              (movie.nameRU.toLowerCase().includes(textToLowerCase) ||
                movie.nameEN.toLowerCase().includes(textToLowerCase)) &&
              (!isShortMoviesChecked ||
                (isShortMoviesChecked && movie.duration <= 40))
            );
          });
          setMovies(filteredMovies); // Сохраняем отфильтрованный список в состоянии
          localStorage.setItem("searchData", searchText);
        } else {
          console.error("No films retrieved");
        }
      } catch (error) {
        console.error("Error fetching films", error);
      }
    },
    []
  );

  const showMovies = useCallback(() => {
    const searchText = localStorage.getItem("searchData");
    if (!searchText) return;
    handleMoviesSearch(searchText);
  }, [handleMoviesSearch]);

  const handleSavedMoviesSearch = useCallback(async (searchText, isShortMoviesChecked) => {
    try {
      const movies = JSON.parse(localStorage.getItem("savedMovies"));
      if (!movies) throw new Error("No saved movies found in localStorage");
      
      const textToLowerCase = searchText.toLowerCase();
      const filteredMovies = movies.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(textToLowerCase) ||
            movie.nameEN.toLowerCase().includes(textToLowerCase)) &&
          (!isShortMoviesChecked || (isShortMoviesChecked && movie.duration <= 40))
        );
      });
      
      setSavedMovies(filteredMovies);
      localStorage.setItem("searchData", searchText);
    } catch (error) {
      console.error(error);
      // Здесь можно обработать ошибку, возможно, установить какое-то состояние ошибки
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const res = await Auth.login(email, password);
      localStorage.setItem("jwt", res.token);
      setIsLoggedIn(true);
      navigate("/movies");
      setIsError(false);
      setMessage("Авторизация прошла успешно");
    } catch (err) {
      console.log(err);
      setIsError(true);
      setMessage("Что-то пошло не так! Попробуйте еще раз.");
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      await Auth.register(name, email, password);
      await handleLogin(email, password);
      setIsError(false);
      setMessage("Регистрация прошла успешно");
    } catch (err) {
      console.log(err);
      setIsError(true);
      setMessage("Что-то пошло не так! Попробуйте еще раз.");
    }
  };

  const onUpdateUser = (data) => {
    return mainApi
      .setUserInfo(data)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((error) => {
        console.error("Error updating user info: ", error);
        return Promise.reject(error);
      });
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("jwt");
      if (token) {
        try {
          const res = await Auth.checkToken(token);
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser(res);
          }
        } catch (err) {
          console.log(err);
        }
      }
      setIsLoading(false);
    };
    checkToken();
  }, []);

  const onSignOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setSavedMovies([]);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header isLoggedIn={isLoggedIn} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  savedMovies={savedMovies}
                  onMovieSave={saveMovie}
                  onMovieDelete={deleteMovie}
                  movies={movies}
                  onMoviesSearch={handleMoviesSearch}
                  showMovies={showMovies}
                  isLoggedIn={isLoggedIn}
                  message={message}
                  isError={isError}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  savedMovies={savedMovies}
                  onMovieDelete={deleteMovie}
                  onSavedMoviesSearch={handleSavedMoviesSearch}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  message={message}
                  isError={isError}
                  handleLogin={handleLogin}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  message={message}
                  isError={isError}
                  handleRegister={handleRegister}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  currentUser={currentUser}
                  onUpdateUser={onUpdateUser}
                  isLoggedIn={isLoggedIn}
                  onSignOut={onSignOut}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
