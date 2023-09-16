import React from "react";
import './Techs.css';

function Techs() {
	return(
		<section id="techs" className="techs">
			<div className="main__header main__header_place_techs">
				<h3 className="main__subtitle">Технологии</h3>
			</div>
			<h2 className="tech__title">7 технологий</h2>
			<p className="tech__subtitle">
				На курсе веб-разработки мы освоили технологии, 
				которые применили в дипломном проекте.
			</p>
			<ul className="techs__names">
				<li className="techs__name">HTML</li>
				<li className="techs__name">CSS</li>
				<li className="techs__name">JS</li>
				<li className="techs__name">React</li>
				<li className="techs__name">Git</li>
				<li className="techs__name">Express.js</li>
				<li className="techs__name">MongoDB</li>
			</ul>
		</section>
	)
}

export default Techs;