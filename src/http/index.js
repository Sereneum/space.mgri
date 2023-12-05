import axios from 'axios';
import { constUrl } from './consts';

const $host = axios.create({
  baseURL: constUrl,
});

const $authHost = axios.create({
  baseURL: constUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    // 'Origin': 'https://stud.mgri.ru',
  },
});

// 'Access-Control-Allow-Origin': '*',
// 'Cross-Origin-Resource-Policy': 'cross-origin',

const configHost = (token) => {
  // $authHost.defaults.headers.common['Authorization'] = `Bearer ${token}`
  $authHost.defaults.headers.common.Authorization = 'Bearer !_!';
  $authHost.defaults.headers.get.Authorization = 'Bearer !_!';
  $authHost.defaults.headers.post.Authorization = 'Bearer !_!';
};

const $authServerHost = axios.create({
  baseURL: constUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

/**/

export {
  $host,
  $authHost,
  $authServerHost,
  configHost,
};
