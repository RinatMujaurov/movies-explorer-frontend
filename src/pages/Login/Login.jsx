import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import './Login.css';

function Login({ handleLogin, isLoggedIn, message, isError }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const { email, password } = values;
      handleLogin(email, password);
    }
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__logo" alt="logo"></Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label">
            <span className="login__label-text">Email</span>
            <input
              className="login__input"
              type="email"
              name="email"
              pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
              required
              value={values.email || ''}
              onChange={handleChange}
            />
            <span className="login__error-message">{errors.email}</span>
          </label>
          <label className="login__label">
            <span className="login__label-text">Пароль</span>
            <input
              className="login__input"
              type="password"
              name="password"
              required
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className="login__error-message">{errors.password}</span>
          </label>
          <div className="login__submit-block">
          <p className={`login__submit-error ${isError ? 'login__submit-error_type_error' : 'login__submit-error_type_success'}`}>{message}</p>
            <button
                className="button-hover login__submit-button"
                type="submit"
                disabled={!isValid || !values.email || !values.password}
              >
                Войти
            </button>
            <p className="login__register-text">
              Ещё не зарегистрированы?{" "}
              <Link to="/signup" className="link login__link">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
