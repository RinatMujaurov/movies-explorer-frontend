import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navigation.css';

function Navigation() {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);

	const handleBurgerClick = () => {
		setIsBurgerOpen(!isBurgerOpen);
	};

	return (
		<nav className='navigation'>
			<div className='navigation__container'>
				<Logo />
				<div className={`navigation__menu-block ${isBurgerOpen ? 'open' : ''}`}>
					<div className='navigation__menu'>
						<NavLink
							className={({ isActive }) =>
								`link navigation__link-home navigation__link ${
								isActive ? 'navigation__link-active' : ''
								}`
							}
							to="/"
						>
							Главная
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`link navigation__link ${
								isActive ? 'navigation__link-active' : ''
								}`
							}
							to="/movies"
						>
							Фильмы
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`link navigation__link ${
								isActive ? 'navigation__link-active' : ''
								}`
							}
							to="/saved-movies"
						>
							Сохраненные фильмы
						</NavLink>
					</div>
					<div className='navigation__account-btn'>
						<Link className='button-hover link navigation__link' to="/profile">Аккаунт</Link>
					</div>
				</div>
				<div className={`button-hover burger ${isBurgerOpen ? 'active' : ''}`} onClick={handleBurgerClick}>
					<span></span>
				</div>
				<div className={`navigation__overlay ${isBurgerOpen ? 'navigation__overlay_open' : ''}`} onClick={handleBurgerClick}></div>
			</div>
		</nav>
	);
};

export default Navigation;




