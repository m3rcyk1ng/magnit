class ProjectsApi {
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

  getProjects() {
    return fetch(`${this._url}`, {
      headers: this._headers,
      method: 'GET',
    }).then(this._checkStatus);
  }
}

export const projectApi = new ProjectsApi({
  url: 'http://localhost:3001/projects',
  headers: {
    'Content-Type': 'application/json',
  },
});
