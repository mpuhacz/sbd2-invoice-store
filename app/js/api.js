import axios from 'axios'


let API = axios.create({
  baseURL: '/api/',
  headers: {
      'Authorization': localStorage.auth,
      'Content-Type': 'application/json'
  }
});

API.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status == 401) {
    window.location.href = '#/login/';
  }
  return Promise.reject(error);
});

export default API