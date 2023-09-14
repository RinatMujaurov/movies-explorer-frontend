class MainApi {
	constructor({ baseUrl }) {
		const jwt = localStorage.getItem("jwt");
		this._baseUrl = baseUrl;
		this._headers = {
		  "Content-Type": "application/json",
		  Authorization: `Bearer ${jwt}`,
		};
	 }
 
	_getResponseData(res) {
		if (!res.ok) {
		  return Promise.reject(`Ошибка: ${res.status}`);
		}
		return res.json();
	 }
  
	 _request(url, options) {
		return fetch(url, options).then(this._getResponseData);
	 }

	//получить список сохраненых фильмов в виде массива
	getSavedMovies() {
		return this._request(this._baseUrl + '/movies', {
			method: "GET",
			headers: this._headers,
		 });
	}
	//Сохранить фильм
	postMovie(
	  {
		 country,
		 director,
		 duration,
		 year,
		 description,
		 image,
		 trailerLink,
		 nameRU,
		 nameEN,
		 id,
	  }
	) {
		return this._request(this._baseUrl + '/movies', {
			method: "POST",
			headers: this._headers,
			body: JSON.stringify({
				country,
				director,
				duration,
				year,
				description,
				image: `https://api.nomoreparties.co${image.url}`,
				trailerLink,
				thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
				movieId: id,
				nameRU,
				nameEN,
			 }),
		 });
	}
	//Удалить фильм
	deleteMovie(_id) {
		return this._request(this._baseUrl + '/movies' + `/${_id}`, {
			method: "DELETE",
			headers: this._headers,
		 });
	}
	//получить данные пользователя
	getUserInfo() {
		return this._request(this._baseUrl + "/users/me", {
		  method: "GET",
		  headers: this._headers,
		});
	 }
	//заменить данные пользователя
	setUserInfo({name, email}) {
		return this._request(this._baseUrl + "/users/me", {
		  method: "PATCH",
		  headers: this._headers,
		  body: JSON.stringify({name, email}),
		});
	 }
 }
 
const mainApi = new MainApi({
	baseUrl: "https://api.movex.nomoreparties.co",
 });
	
export default mainApi;