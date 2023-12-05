import axios from 'axios';
import { API_AUTH, constUrl } from './consts';

/**/
const authCheckInter = axios.create({
  baseURL: constUrl,
});

// Добавляем интерцептор запросов
authCheckInter.interceptors.request.use(
  (config) => {
    // Выполняем дополнительные действия перед отправкой запроса, если необходимо
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// Добавляем интерцептор ответов
authCheckInter.interceptors.response.use(
  (response) =>
  // Возвращаем успешный ответ без изменений
    response,
  (error) => {
    if (error.response.status === 401) {
      // Обрабатываем ошибку 401
      // console.log('Ошибка 401: Пользователь не авторизован.');
    }
    return Promise.reject(error);
  },
);
/* Проверка токена пользователя */
export const authCheck = () => authCheckInter.get(API_AUTH);

/* */
const loginInter = axios.create({
  baseURL: constUrl,
});

export const login = async (userName, password) => {
  const { data } = await loginInter.post(API_AUTH, { userName, password });

  return data.data;
};
