import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
import useFormAndValidation from '../../hooks/useFormAndValidation'; 

function Profile({ onSignOut, onUpdateUser, currentUser }) {
	const [isActive, setIsActive] = useState(false);
	const [isError, setIsError] = useState(false);
	const [profileMessage, setProfileMessage] = useState('');
	const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();
	const navigate = useNavigate();
 
	useEffect(() => {
	  if (currentUser) {
		 resetForm(currentUser, {}, true);
	  }
	}, [currentUser, resetForm]);
 
	const handleRedactProfile = () => {
	  setIsActive(!isActive);
	};
 
	const handleSubmit = (e) => {
		e.preventDefault();
	 
		onUpdateUser(values)
			.then(() => {
				setIsActive(false);
				setIsError(false); // Устанавливаем ошибку в false, так как операция прошла успешно
				setProfileMessage('Данные успешно обновлены');
			})
			.catch((err) => {
				setIsError(true); // Устанавливаем ошибку в true, так как произошла ошибка
				setProfileMessage('При обновлении данных произошла ошибка');
				console.error(err);
			});
	 };
 
	const handleSignOut = () => {
	  onSignOut();
	  navigate('/');
	};

  return(
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, {currentUser ? currentUser.name : '...'}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <label className="profile__form-label border">
            Имя
            <input
              className="profile__form-input"
              type="text"
              name="name"
              placeholder="Имя"
              minLength={2}
              maxLength={30}
              value={values.name || ''}
              disabled={!isActive}
              onChange={handleChange}
              required
            />
          </label>
			 <span className="profile__form-error">{errors.name}</span>
          <label className="profile__form-label">
            E-mail
            <input
              className="profile__form-input"
              type="email"
              name="email"
              placeholder="E-mail"
              value={values.email || ''}
              disabled={!isActive}
              onChange={handleChange}
              required
            />
          </label>
			 <span className="profile__form-error">{errors.email}</span>
			 
			 <p className={`profile__submit-error ${isError ? 'profile__submit-error_type_error' : 'profile__submit-error_type_success'}`}>{profileMessage}</p>
          {isActive ? (
            <button
              type="submit"
              className='button-hover profile__save-button'
              disabled={!isValid || (values.email === currentUser.email && values.name === currentUser.name)}
            >
              Сохранить
            </button>
          ) : (
            <>
              <button
                type="button"
                className="profile__edit-button link"
                onClick={handleRedactProfile}
              >
                Редактировать
              </button>
              <Link className="link profile__exit-button" to="/" onClick={handleSignOut}>
                Выйти из аккаунта
              </Link>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default Profile;
