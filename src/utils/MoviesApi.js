class MoviesApi {
	constructor({ baseUrl }) {
	  this._baseUrl = baseUrl;
	  this._headers = {
		 "Content-Type": "application/json",
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

	  //получить список всех фильмов в виде массива
	  getInitialMovies() {
		return this._request(this._baseUrl, {
		  method: "GET",
		  headers: this._headers,
		});
	 }
  }
  
const moviesApi = new MoviesApi({
	 baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  });

  export default moviesApi;