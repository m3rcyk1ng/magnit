class VacanciesApi {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getVacancies() {
    return fetch(`${this._url}`, {
      headers: this._headers,
      method: 'GET',
    }).then(this._checkStatus);
  }
}

export const vacanciesApi = new VacanciesApi({
  url: 'http://localhost:3001/vacancies',
  headers: {
    'Content-Type': 'application/json',
  },
});
