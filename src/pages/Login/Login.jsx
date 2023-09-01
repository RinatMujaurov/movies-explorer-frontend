import React from 'react';
import { Link } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import './Login.css';

function Login() {
	const {
		values,
		handleChange,
		errors,
		isValid,
		setValues,
		setIsValid,
	 } = useFormAndValidation();

	 const handleSubmit = (e) => {
		e.preventDefault();
		// код сабмита
	 };

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__logo" alt="logo">
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label">
            <span className="login__label-text">Email</span>
            <input
              className="login__input"
              type="email"
              name="email"
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
            <button
              className={`button-hover login__submit-button ${isValid ? '' : 'login__submit-button_disabled'}`}
              type="submit"
              disabled={!isValid}
            >
              Войти
            </button>
            <p className="login__register-text">
              Ещё не зарегистрированы?{" "}
              <Link to="/sign-up" className="link login__link">
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
