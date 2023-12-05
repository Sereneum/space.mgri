import { $authHost } from "./index";
import { API_DETAIL_TASK } from "./consts";
import { epoch_courseData } from "./epochServer";

const preEpoch_deadlineParser = deadline => {
  let hours = (Date.parse(deadline) - Date.now()) / (1000 * 60 * 60) + 24
  return hours > 0 ? Math.round(hours) : 0
}

export const preEpoch_mergeCourseData = (user_data, duty_data, course_id, course_name = '') => {
  return new Promise((resolve, reject) => {
    //
    // console.log(user_data, duty_data)
    //
    const courseMaterials = duty_data.listFiles
    const courseThemes = duty_data.listCourseThemes
    const preTasks = user_data.listSelectedTasks
    const listStatus = ["Просрочено", "В проверке", "На доработке", "Выполнено", "Не отправлено"]


    // подгрузка детальной информации о каждом задании в курсе
    const tasks = []
    for (let i = 0; i < preTasks.length; ++i) {
      let task_status = preTasks[i].taskExpired.statusID === null ? 0 : preTasks[i].taskExpired.statusID
      tasks.push({
        courseID: preTasks[i].courseID,
        courseTaskID: preTasks[i].courseTaskID,
        courseName: course_name,
        dateAdded: preTasks[i].dateAdded,
        taskFile: preTasks[i].file,
        nameTask: preTasks[i].nameTask,
        numberTask: preTasks[i].numberTask,
        periodRealization: preTasks[i].periodRealization,
        deadline: preEpoch_deadlineParser(preTasks[i].periodRealization),
        userFIO: preTasks[i].userFIO,
        statusID: task_status,
        statusName: task_status === 0 ? 'Не отправлено' : listStatus[task_status - 1]
      })
    }

    // окончательная информация о курсе
    resolve({
      course_id,
      course_name,
      courseMaterials,
      courseThemes,
      tasks
    })
  })
}

/* детальная информация о задаче */
export const preEpoch_getDetailTaskData = (task_id) => new Promise((resolve, reject) => {
  $authHost(API_DETAIL_TASK + task_id).then(d => resolve(d.data.data.listCourseTaskStudent[0]))
})

/* информация о задаче из курса */
export const preEpoch_getCurrentTaskData = (task_id, courses) => {
  for (let item of courses)
    for (let task of item.tasks)
      if (task.courseTaskID === task_id)
        return task
}

/* marge -> all courses + db courses */
export const preEpoch_division = (active, all) => {
  const passive = []
  for (let i of all) {
    let isPresent = false
    for (let j of active) {
      if (i.course_id === j.course_id) {
        isPresent = true;
        j.dateCreate = i.dateCreate;
        j.userName = i.userName
        break
      }
    }

    if (!isPresent) passive.push(i)
  }
  return { active: active, passive: passive }
}

// /* Меняет название, положение каждого курса, а также получает новые курсы */
// export const preEpoch_reconstructionCourses = (before = [], after = []) =>
//     new Promise((resolve, reject) => {
//         const list = new Array(after.length)
//         const promises = []
//
//         const detective = (item) => {
//             let isFind = false
//             for (let i = 0; i < list; ++i)
//                 if (item.course_id === list[i].course_id)
//                     return {isFind: true, course: {...list[i], course_name: item.course_name}}
//
//             return {isFind: false}
//         }
//
//         const loading = (item, index) => {
//             return new Promise((rs, rj) => {
//                 epoch_courseData(item.course_id)
//                     .then(new_course => {
//                         rs({index: index, course: {...new_course, course_name: item.course_name}})
//                     })
//             })
//         }
//
//         for (let i = 0; i < after.length; ++i) {
//             let det_result = detective(after[i])
//             if (det_result.isFind)
//                 list[i] = det_result.course
//             else
//                 promises.push(loading(after[i], i))
//         }
//
//         Promise.all(promises).then(all_promises => {
//             for (let item_promise of all_promises)
//                 list[item_promise.index] = item_promise.course
//             resolve(list)
//         })
//     })


export const preEpoch_saveCourses = (old_c, new_c) => new Promise((saveRes, saveRej) => {
  const len = new_c.length
  const finiteSet = new Array(len)
  const needReq = new Array(0)

  const findCourse = course_id => {
    for (let item of old_c)
      if (course_id === item.course_id)
        return { status: 1, course: item }
    return { status: 0, course: {} }
  }

  // этап проверок
  for (let i = 0; i < len; ++i) {
    const r = findCourse(new_c[i].course_id)
    if (!r.status) needReq.push({
      course_id: new_c[i].course_id,
      course_name: new_c[i].course_name,
      position: i
    })
    else finiteSet[i] = { ...r.course, course_name: new_c[i].course_name }
  }


  // этап загрузки
  const promises = []
  for (let i = 0; i < needReq.length; ++i)
    promises.push(epoch_courseData(
      needReq[i].course_id,
      needReq[i].course_name
    ))

  Promise.all(promises)
    .then(result => {
      for (let i = 0; i < result.length; ++i) {
        'courseID' in result[i] && delete result[i].courseID
        result[i].course_id = needReq[i].course_id
        result[i].course_name = needReq[i].course_name
        finiteSet[needReq[i].position] = result[i]
      }
      saveRes(finiteSet)
    })
  if (!needReq.length) saveRes(finiteSet)
})
