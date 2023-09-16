import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <div className="nav-tab__block">
        <h1 className="main__title">Учебный проект студента&nbsp; факультета Веб-разработки.</h1>
        <ul className="nav-tab__links">
          <li>
            <Link className="link nav-tab__link" smooth to="#about-project">О проекте</Link>
          </li>
          <li>
            <Link className="link nav-tab__link" smooth to="#techs">Технологии</Link>
          </li>
          <li>
            <Link className="link nav-tab__link" smooth to="#about-me">Студент</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NavTab;
