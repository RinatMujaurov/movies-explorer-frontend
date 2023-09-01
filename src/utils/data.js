import film1 from '../images/film1.png';
import film2 from '../images/film2.png';
import film3 from '../images/film3.png';
import film4 from '../images/film4.png';
import film5 from '../images/film5.png';
import film6 from '../images/film6.png';
import film7 from '../images/film7.png';
import film8 from '../images/film8.png';
import film9 from '../images/film9.png';
import film10 from '../images/film10.png';
import film11 from '../images/film11.png';
import film12 from '../images/film12.png';
import floki from '../images/floki.jpeg';

const moviesData = [
	{
		title: "33 слова о дизайне",
		duration: "1ч 17м",
		link: `${floki}`,
		movieId: 1,
	 },
	 {
		title: "Киноальманах «100 лет дизайна»",
		duration: "1ч 17м",
		link: `${film2}`,
		movieId: 2,
	 },
	 {
		title: "В погоне за Бенкси",
		duration: "1ч 17м",
		link: `${film3}`,
		movieId: 3,
	 },
	 {
		title: "Баския: Взрыв реальности",
		duration: "1ч 17м",
		link: `${film4}`,
		movieId: 4,
	 },
	 {
		title: "Бег это свобода",
		duration: "1ч 17м",
		link: `${film5}`,
		movieId: 5,
	 },
	 {
		title: "Книготорговцы",
		duration: "1ч 17м",
		link: `${film6}`,
		movieId: 6,
	 },
	 {
		title: "Когда я думаю о Германии ночью",
		duration: "1ч 17м",
		link: `${film7}`,
		movieId: 7,
	 },
	 {
		title: "Gimme Danger: История Игги и The Stooges",
		duration: "1ч 17м",
		link: `${film8}`,
		movieId: 8,
	 },
	 {
		title: "Дженис: Маленькая девочка грустит",
		duration: "1ч 17м",
		link: `${film9}`,
		movieId: 9,
	 },
	 {
		title: "Соберись перед прыжком",
		duration: "1ч 17м",
		link: `${film10}`,
		movieId: 10,
	 },
	 {
		title: "Пи Джей Харви: A dog called money",
		duration: "1ч 17м",
		link: `${film11}`,
		movieId: 11,
	 },
	 {
		title: "По волнам: Искусство звука в кино",
		duration: "1ч 17м",
		link: `${film12}`,
		movieId: 12,
	 },
	 {
		title: "Соберись перед прыжком",
		duration: "1ч 17м",
		link: `${film10}`,
		movieId: 10,
	 },
	 {
		title: "Пи Джей Харви: A dog called money",
		duration: "1ч 17м",
		link: `${film11}`,
		movieId: 11,
	 },
	 {
		title: "По волнам: Искусство звука в кино",
		duration: "1ч 17м",
		link: `${film12}`,
		movieId: 12,
	 },
	 {
		title: "Соберись перед прыжком",
		duration: "1ч 17м",
		link: `${film10}`,
		movieId: 10,
	 },
	 {
		title: "Пи Джей Харви: A dog called money",
		duration: "1ч 17м",
		link: `${film11}`,
		movieId: 11,
	 },
	 {
		title: "По волнам: Искусство звука в кино",
		duration: "1ч 17м",
		link: `${film12}`,
		movieId: 12,
	 },
]

const savedMoviesData = [
	{
	  title: "33 слова о дизайне",
	  duration: "1ч 17м",
	  link: `${film1}`,
	  movieId: 1,
	  delete: "movie-card__delete",
	},
	{
	  title: "Киноальманах «100 лет дизайна»",
	  duration: "1ч 17м",
	  link: `${film2}`,
	  movieId: 2,
	  delete: "movie-card__delete",
	},
	{
	  title: "В погоне за Бенкси",
	  duration: "1ч 17м",
	  link: `${film3}`,
	  movieId: 3,
	  delete: "movie-card__delete",
	},
 ];

export { moviesData, savedMoviesData };