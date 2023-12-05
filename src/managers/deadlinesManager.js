import { checkDeadline, firstDateIsEarlierForSort } from './timeManager';

// смешиваем
const mixer = (courses) => courses.reduce((tasks, i) => tasks.concat(i.tasks), []);

// отбираем по времени
const selectionByTime = (t) => t.filter((i) => checkDeadline(i.periodRealization) > 0);
// отбираем по статусу
// status = 3 -> на дороботке(?), status = 2 -> в проверке, status = 0 -> не отправлено
const selectionByStatus = (t) => t.filter((i) => i.statusID === 0 || i.statusID === 3);

// сортируем и обрезаем
const conv = (t, isSmallDevice) => t
  .sort((a, b) => firstDateIsEarlierForSort(b.periodRealization, a.periodRealization))
  .slice(isSmallDevice ? 0 : -3)
  .sort((a, b) => firstDateIsEarlierForSort(a.periodRealization, b.periodRealization));

export const deadlinesManager = (courses, isSmallDevice) =>
  conv(selectionByStatus(selectionByTime(mixer(courses))), isSmallDevice);
