import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './AuthBlock.css';

function AuthBlock() {
	return (
	  <nav className="auth-block">
		 <Logo />
		 <div className='auth--block__menu'>
			 	<Link className='link auth-block__link' to="/signup">Регистрация</Link>
		 		<Link className='link auth-block__link login-btn' to="/signin">Войти</Link>
		 </div>
	  </nav>
	);
 };

 export default AuthBlock;