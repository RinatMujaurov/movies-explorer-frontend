import React from "react";
import { Link } from "react-router-dom";
import './AboutMe.css';
import photo from '../../images/photo.jpeg';

function AboutMe() {
	return(
		<section id="about-me" className="about-me">
			<div className="main__header">
				<h2 className="main__subtitle">Студент</h2>
			</div>
			<article className="info">
				<div className="info__text-container">
					<h3 className="info__title">Ринат</h3>
					<p className="info__subtitle">Фронтенд-разработчик, 28 лет</p>
					<p className="info__description">
						Я из Казани, закончил кафедру политологии в КФУ. После университета я увлекся цветокоррекцией видео
						- это до сих пор остается моим хобби.
						В 2022 году я переехал с семьей в Турцию и мне пришлось сменить деятельность. 
						И я начал изучать Веб-разработку, сейчас я уделяю все время этому.
					</p>
					<Link
					to='https://github.com/rinatmujaurov'
					target='_blank'
					className='link info__link'>
					Github
					</Link>
				</div>
				<div className="info__photo-container">
					<img className="info__photo" src={photo} alt='photo'/>
				</div>
			</article>
			<article className="portfolio">
				<h3 className="portfolio__title">Портфолио</h3>
				<ul className="portfolio__list">
					<li className="portfolio__item">
						<Link to="https://github.com/RinatMujaurov/how-to-learn" target='_blank' className="link portfolio__link">Статичный сайт</Link>
					</li>
					<li className="portfolio__item">
						<Link to="https://github.com/RinatMujaurov/russian-travel" target='_blank' className="link portfolio__link">Адаптивный сайт</Link>
					</li>
					<li className="portfolio__item">
						<Link to="https://github.com/RinatMujaurov/react-mesto-api-full-gha" target='_blank' className="link portfolio__link">Одностраничное приложение</Link>
					</li>
				</ul>
			</article>
		</section>
	)
}

export default AboutMe;