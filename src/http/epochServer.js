import axios from 'axios';
import { $authHost } from './index';
import {
  API_ALL_COURSES,
  API_CHECKER_MAIL,
  API_COURSE,
  API_DELETE_FILE,
  API_DUTY,
  API_MORE_INFO,
  API_UPLOAD_FILE,
} from './consts';
import { preEpoch_mergeCourseData, preEpoch_division } from './preEpoch';
import { parserDateNow } from '../managers/timeManager';

const conv = (data) => {
  const conv_data = { ...data };
  if (!conv_data.active) { conv_data.active = []; }
  if (typeof conv_data.active === 'string') { conv_data.active = JSON.parse(conv_data.active); }

  if (!conv_data.settings) { conv_data.settings = {}; }
  if (typeof conv_data.settings === 'string') { conv_data.settings = JSON.parse(conv_data.settings); }

  return conv_data;
};

/* Загрузка всех курсов со студа */
const fetchAllCourses = async (id) => new Promise((resolve, reject) => {
  $authHost(API_ALL_COURSES)
    .then((d) => {
      // console.log(d
      //     .data
      //     .data
      //     .listCourse)

      resolve(d
        .data
        .data
        .listCourse
        .sort((a, b) => new Date(b.dateCreate) - new Date(a.dateCreate))
        .map((i) => ({
          course_id: i.courseID,
          course_name: i.discipline,
          dateCreate: i.dateCreate,
          userName: i.userName,
        })));
    })
    .catch((err) => reject(err));
});

const serverKey = 'AKfycbwhPuNg2tS8t_vxveG0L_0W737SC5G47J6j9ctIGTa1dv3wQHobnfpnbxTdBxVUWa0H0g';
const serverUrl = `https://script.google.com/macros/s/${serverKey}/exec?`;

const serverInter = axios.create(
  {
    baseURL: serverUrl,
  },
  {
    crossDomain: true,
    redirect: true,
    contextType: 'text/plain',
    method: 'POST',
    dataType: 'jsonp',
  },
);

/* подгрузка данных с бд */
export const epoch_fetchServerData = async (id) => new Promise((resolve, reject) => {
  const body = JSON.stringify({ id, type: 'get' });
  serverInter.post('', body)
    .then((d) => resolve(conv(d.data.data)))
    .catch((err) => reject(err));
});

/* данные курса */
export const epoch_courseData = (course_id, course_name = '') => new Promise((resolve, reject) => {
  // кусок данных об курсе
  const user_data = new Promise((resolve, reject) => $authHost(API_COURSE + course_id)
    .then((d) => resolve(d.data.data)));
  // еще один кусок данных об курсе
  const duty_data = new Promise((resolve, reject) => $authHost(API_DUTY + course_id)
    .then((d) => resolve(d.data.data)));
  // получаем полную инфу
  Promise.all([user_data, duty_data])
    .then((p) => {
      resolve(preEpoch_mergeCourseData(p[0], p[1], course_id, course_name));
    });
});

/* Отправка файла */
export const epoch_uploadFile = (formData) => new Promise((resolve, reject) => {
  $authHost.post(API_UPLOAD_FILE, formData)
    .then((d) => {
      resolve(d.data);
    })
    .catch((e) => reject(e));
});

/* Удаление файла */
export const epoch_deleteFile = (fileID) => new Promise((resolve, reject) => {
  $authHost.delete(API_DELETE_FILE + fileID)
    .then((d) => resolve(d.data))
    .catch((e) => e);
});

/* Получение всех active/passive курсов */
export const epoch_fetchConfigurableCourses = (id) => new Promise((resolve, reject) => {
  Promise.all([epoch_fetchServerData(id), fetchAllCourses(id)])
    .then((r) => resolve(preEpoch_division(r[0].active, r[1])))
    .catch((err) => reject(err));
});

/* Обновление активных курсов в бд */
export const epoch_updateActiveCourses = async (id, active = []) => new Promise((resolve, reject) => {
  const body = JSON.stringify({
    id,
    active: JSON.stringify(active),
    type: 'add',
  });
  serverInter.post('', body)
    .then((d) => {
      console.log('epoch_updateActiveCourses -> result = ', d.data);
      resolve(d.data);
    })
    .catch((e) => reject({ status: 0, error: e }));
});

// export const epoch_getMinorUserData = (id) => new Promise((resolve, reject) => {
//     $authHost(API_MORE_INFO + id)
// })

export const epoch_getMinorUserData = (id) => $authHost(API_MORE_INFO + id);

export const epoch_schedule = ({ groupID, weekID = parserDateNow(), isCalendar }) => new Promise((resolve, reject) => {
  const apiUrl = `/api/Rasp?idGroup=${groupID}&sdate=${weekID || parserDateNow()}`;
  const apiCalendarUrl = `api/GetRaspDates?idGroup=${groupID}`;

  const promiseList = [
    new Promise((resCurrentWeek, rejCurrentWeek) => {
      $authHost(apiUrl)
        .then((r) => resCurrentWeek(r.data.data))
        .catch((err) => rejCurrentWeek(err));
    }),
  ];
  if (!isCalendar) {
    promiseList.push(
      new Promise((resCalendarData, rejCalendarData) => {
        $authHost(apiCalendarUrl)
          .then((r) => resCalendarData(r.data.data))
          .catch((err) => rejCalendarData(err));
      }),
    );
  }
  Promise.all(promiseList)
    .then((r) => resolve(r));
});

/* кол-во сообщений */
export const epoch_checkerMail = () => new Promise((resolve, reject) => {
  $authHost.get(API_CHECKER_MAIL)
    .then((d) => resolve(d.data))
    .catch((e) => e);
});
