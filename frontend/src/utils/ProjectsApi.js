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
      credentials: 'include',
    }).then(this._checkStatus);
  }

  deleteProject({ projectId }) {
    return fetch(`${this._url}/${projectId}`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    }).then(this._checkStatus);
  }
}

export const projectApi = new ProjectsApi({
  url: 'https://api.sk-magnit.ru/projects',
  headers: {
    'Content-Type': 'application/json',
  },
});
