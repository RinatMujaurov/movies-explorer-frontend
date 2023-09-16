import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Register({ handleRegister, isLoggedIn, message, isError }) {
 
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormAndValidation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const { name, email, password } = values;
      handleRegister(name, email, password);
    }
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__logo" alt="logo"></Link>
        <h2 className="login__title">Добро пожаловать!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label">
            <span className="login__label-text">Имя</span>
            <input
              className="login__input"
              type="text"
              name="name"
              value={values.name || ''}
              minLength={2}
              maxLength={24}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="login__error-message">{errors.name}</span>}
          </label>
          <label className="login__label">
            <span className="login__label-text">Email</span>
            <input
              className="login__input"
              type="email"
              name="email"
              value={values.email || ''}
              pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
              onChange={handleChange}
              required
            />
            {errors.email && <span className="login__error-message">{errors.email}</span>}
          </label>
          <label className="login__label">
            <span className="login__label-text">Пароль</span>
            <input
              className="login__input"
              type="password"
              name="password"
              value={values.password || ''}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="login__error-message">{errors.password}</span>}
          </label>
          <div className="login__submit-block">
          <p className={`login__submit-error ${isError ? 'login__submit-error_type_error' : 'login__submit-error_type_success'}`}>{message}</p>
            <button
              type="submit"
              className={`button-hover login__submit-button`}
              disabled={!isValid || !values.name || !values.email || !values.password}
            >
              Зарегистрироваться
            </button>
            <p className="login__register-text">
              Уже зарегистрированы?{" "}
              <Link to="/signin" className="link login__link">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
