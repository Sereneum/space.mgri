import { checkDeadline, firstDateIsEarlierForSort } from './timeManager';

// смешиваем
const mixer = (courses) => {
  const tasks = [];
  for (const i of courses) {
    for (const j of i.tasks) { tasks.push(j); }
  }
  return tasks;
};
// отбираем по времени
const selectionByTime = (t) => {
  const r = [];
  for (const i of t) {
    if (checkDeadline(i.periodRealization) > 0) { r.push(i); }
  }
  return r;
};
// отбираем по статусу
const selectionByStatus = (t) => {
  const r = [];
  // status = 3 -> на дороботке(?), status = 2 -> в проверке, status = 0 -> не отправлено
  for (const i of t) {
    if (i.statusID === 0 || i.statusID === 3) { r.push(i); }
  }
  return r;
};

// сортируем и обрезаем
const conv = (t, isSmallDevice) => t
  .sort((a, b) => firstDateIsEarlierForSort(b.periodRealization, a.periodRealization))
  .slice(isSmallDevice ? 0 : -3)
  .sort((a, b) => firstDateIsEarlierForSort(a.periodRealization, b.periodRealization));

export const deadlinesManager = (courses, isSmallDevice) => conv(selectionByStatus(selectionByTime(mixer(courses))), isSmallDevice);
