import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

	return(
		<footer className="footer">
			<p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
			<div className="footer__container">
				<p className="footer__copyright">© {currentYear}</p>
				<nav>
					<ul className="footer__nav">
						<li>
							<Link 
								to="https://practicum.yandex.ru/"
								target='_blank' 
								className="link footer__nav-link">Яндекс.Практикум
							</Link>
						</li>
						<li>
							<Link 
								to='https://github.com/rinatmujaurov'
								target='_blank' 
								className="link footer__nav-link">GitHub
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer;