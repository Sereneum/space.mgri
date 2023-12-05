import moment from 'moment';
// import {ru} from 'date-fns/locale'; // Подключаем русскую локаль

const convResult = (result) => {
  switch (result) {
    case 'час':
      return '1 час';
    case 'день':
      return '1 день';
    case 'месяц':
      return '1 месяц';
    default:
      return result;
  }
};
// принимает дату, и возращает время дедлайна
export const timeManager = (dead) => {
  const end = moment(dead).add(1, 'day');
  const today = moment();
  const daysDiff = end.diff(today, 'day');
  const hoursDiff = end.diff(today, 'hour') + 1;

  // 1 случай - конец
  if (daysDiff <= 0 && hoursDiff <= 0) { return '0_0'; }

  // 2 случай - ласт день
  if (daysDiff === 0 && hoursDiff > 0) { return convResult(moment.duration(hoursDiff, 'hours').humanize()); }

  if (daysDiff > 0) { return convResult(moment.duration(daysDiff, 'days').humanize()); }

  return 'ошибка';
};

export const checkDeadline = (time) => moment(time).add(1, 'day').diff(moment(), 'hour');

export const parserDateNow = (date = null) => {
  const now = date || new Date();

  return `${now.getFullYear()}-${

    (now.getMonth() + 1).toString().length < 2
      ? `0${now.getMonth() + 1}`
      : (now.getMonth() + 1)
  }-${now.getDate().toString().length < 2 ? `0${now.getDate()}` : now.getDate()}`;
};

/* преобразует дату из YYYY-MM-DD -> DD.MM.YYYY */
export const slashToPoint = (date) => moment(date).format('DD.MM.YYYY');

export const pointToSlash = (date) =>
// console.log('pointToSlash')
  moment(date).format('YYYY-MM-DD');

// export const isSameDate = (begin, end) =>
//     moment().isSameOrAfter(begin) && moment().isSameOrBefore(end)

export const isSameDate = (begin, end) => moment().isSameOrAfter(moment(begin, 'HH:mm')) && moment().isSameOrBefore(moment(end, 'HH:mm'));

export const dateGetter = (str) => {
  const date = new Date(str);
  return !date
    ? new Date(`${str.split('.')[2]}-${str.split('.')[1]}-${str.split('.')[0]}`)
    : date;
};

export const firstDateIsEarlierForSort = (d1, d2) => {
  // const _d1 = moment(d1); console.log('d1: ', d1, _d1);
  // const _d2 = moment(d2); console.log('d2: ', d2, _d2);
  // const r = moment(d1).isBefore(moment(d2));
  // console.log(r);
  const r = moment(d1).isBefore(moment(d2));
  if (r) return -1;
  return 1;
};

export const toTextFormatMonth = (num, fullMode = true) => {
  switch (num) {
    case (0): return fullMode ? 'Январь' : 'янв.';
    case (1): return fullMode ? 'Февраль' : 'февр.';
    case (2): return fullMode ? 'Март' : 'март.';
    case (3): return fullMode ? 'Апрель' : 'апр.';
    case (4): return fullMode ? 'Май' : 'май.';
    case (5): return fullMode ? 'Июнь' : 'июнь';
    case (6): return fullMode ? 'Июль' : 'июль';
    case (7): return fullMode ? 'Август' : 'авг.';
    case (8): return fullMode ? 'Сентябрь' : 'сент.';
    case (9): return fullMode ? 'Октярь' : 'окт.';
    case (10): return fullMode ? 'Ноябрь' : 'нояб.';
    case (11): return fullMode ? 'Декабрь' : 'дек.';
  }
};
