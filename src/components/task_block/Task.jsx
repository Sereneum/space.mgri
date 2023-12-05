import { CaretLeft } from '@phosphor-icons/react';

import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Materials from '../materials/Materials.jsx';
import {
  preEpoch_getCurrentTaskData,
  preEpoch_getDetailTaskData,
} from '../../http/preEpoch.js';
import { Context } from '../../index.jsx';
import TaskFile from './TaskFile.jsx';
import TaskInfo from './TaskInfo.jsx';
import Solution from './Solution.jsx';
import LoaderTask from '../loaders/LoaderTask.jsx';
import LocalConfig from '../../store/localConfig.js';

const Task = () => {
  const { courseData } = useContext(Context);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [currentData, setCurrentData] = useState({});
  const [detailData, setDetailData] = useState({});
  const [materialsData, setMaterialsData] = useState([]);
  /* Параметры, отправляемые вместе с файлом */
  const [parameters, setParameters] = useState({});

  const findMaterials = (course_id) => {
    const foundCourse = courseData.courses.find(
      (c) => c.course_id === course_id,
    );
    return foundCourse ? foundCourse.courseMaterials : null;
  };

  const findTaskName = () => {
    const taskId = Number(localStorage.getItem('taskId'));
    if (!taskId) return '';

    let foundTaskName = '';

    courseData.courses.some((c) => {
      const task = c.tasks.find((t) => taskId === t.courseTaskID);
      if (task) {
        foundTaskName = task.nameTask;
        return true;
      }
      return false;
    });

    return foundTaskName;
  };
  /* Загружает/обновляет все денные о задании */
  const loadingTaskData = () => {
    const taskId = Number(localStorage.getItem('taskId'));
    if (!taskId) navigate('/');

    //
    const curD = preEpoch_getCurrentTaskData(taskId, courseData.courses);
    setCurrentData(curD);
    // получаем материалы курса
    setMaterialsData(findMaterials(curD.courseID));
    // ждем дополнительные данные от сервера
    preEpoch_getDetailTaskData(taskId)
      .then((d) => {
        // загрузка метериалов

        // загрузка детальной инфы
        setDetailData(d);
        // загрузка параметров для прикрепления файлов
        setParameters({
          studentID: d.studentID,
          courseTaskID: d.courseTaskID,
          courseStudentID: d.courseStudentID,
        });
        // конец загрузки
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    return () => setIsLoading(true);
  };

  useEffect(loadingTaskData, [localStorage.getItem('taskId')]);

  const back = () => {
    navigate(-1);
  };

  const isSuccess = currentData.statusID === 4;

  // >xd<
  // Task
  // ----TaskInfo
  // ----Solution
  // --------SolutionFile
  // --------SolutionModal
  // ----Materials
  // >xd<

  if (isLoading) {
    return (
      <div className={'block'}>
        <div className="title_container back_container" onClick={back}>
          <CaretLeft weight="bold" className="icon_mid" />
          <h2>{findTaskName()}</h2>
        </div>
        <LoaderTask />
      </div>
    );
  }

  return (
    <div className="block">
      {/* Название + back() */}
      <div className="title_container back_container" onClick={back}>
        <CaretLeft weight="bold" className="icon_mid" />
        <h2>{currentData.nameTask}</h2>
      </div>

      {/* файл задания */}
      {currentData.taskFile && <TaskFile taskFile={currentData.taskFile} />}

      {/* информация о задании */}
      <TaskInfo
        status={currentData.statusName}
        teacher={currentData.userFIO}
        dateAdded={currentData.dateAdded}
        periodRealization={currentData.periodRealization}
        statusID={currentData.statusID}
        notation={detailData?.notation}
        isSuccess={isSuccess}
      />

      {/* Блок с решением задания (прикрепление + уже прикрепленные файлы) */}
      <Solution
        files={detailData?.files.sort((a, b) => a.dateLoading < b.dateLoading)}
        isSuccess={isSuccess}
        parameters={parameters}
        loadingTaskData={loadingTaskData}
      />

      {materialsData && <Materials items={materialsData} />}
    </div>
  );
};

export default Task;
