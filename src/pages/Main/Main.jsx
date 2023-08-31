import React from "react";
import NavTab from "../../components/NavTab/NavTab";
import AboutProject from "../../components/AboutProject/AboutProject";
import Techs from "../../components/Techs/Techs";
import AboutMe from "../../components/AboutMe/AboutMe";
import './Main.css';

function Main() {
	return(
		<>
			<NavTab />
			<AboutProject />
			<Techs />
			<AboutMe />
		</>
	)
}

export default Main;