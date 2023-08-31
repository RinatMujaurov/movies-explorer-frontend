import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Movies from './pages/Movies/Movies';
import SavedMovies from './pages/SavedMovies/SavedMovies';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import './App.css';

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/sign-in' || location.pathname === '/sign-up';

  return (
    <div className="page">
       {!isLoginPage && <Header />}
      <main className='main'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;

