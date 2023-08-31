import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Register() {
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
			 <Link to="/" className="login__logo" alt="logo"></Link>
			 <h2 className="login__title">Добро пожаловать!</h2>
			 <form className="login__form" onSubmit={handleSubmit}>
				<label className="login__label">
				  <span className="login__label-text">Имя</span>
				  <input
					 className="login__input"
					 type="name"
					 name="name"
					 value={values.name || ''}
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
					<button
					className={`button-hover login__submit-button ${isValid ? '' : 'login__submit-button_disabled'}`}
					type="submit"
					disabled={!isValid}
					>
					 Зарегистрироваться
				  </button>
				  <p className="login__register-text">
					 Уже не зарегистрированы?{" "}
					 <Link to="/sign-in" className="link login__link">
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