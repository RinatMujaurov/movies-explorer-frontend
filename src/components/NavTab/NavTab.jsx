import React from "react";
import { Link } from "react-router-dom";
import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <div className="nav-tab__block">
        <h1 className="main__title">Учебный проект студента&nbsp; факультета Веб-разработки.</h1>
        <ul className="nav-tab__links">
          <li className="link nav-tab__link">О проекте</li>
          <li className="link nav-tab__link">Технологии</li>
          <li className="link nav-tab__link">Студент</li>
        </ul>
      </div>
    </section>
  );
}

export default NavTab;
