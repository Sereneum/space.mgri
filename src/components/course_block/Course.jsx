import {
  CalendarBlank,
  CaretLeft,
  Check,
  Clock,
  GraduationCap,
  PencilSimple,
  WarningCircle,
  X,
  XCircle,
} from '@phosphor-icons/react';

import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Materials from '../materials/Materials.jsx';
import { Context } from '../../index.jsx';
import CourseItem from './CourseItem.jsx';
import LoaderCourse from '../loaders/LoaderCourse.jsx';


const Course = observer(() => {
  const { courseData } = useContext(Context);
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const findCourse = (course_id) => {
    let flag = false;
    for (const c of courseData.courses) {
      if (c.course_id === course_id) {
        flag = true;
        break;
      }
    }
    return flag;
  };

  const findCourseName = () => {
    const course_id = Number(localStorage.getItem('activeCourse'));
    // let niceTry = true
    if (!course_id || !courseData.courses.length) return '';
    for (const c of courseData.courses) if (course_id === c.course_id) return c.course_name;
    return '';
  };

  // подгрузОчка курса
  useEffect(() => {
    if (!courseData.courses.length) navigate('/');
    // пользователь изначально зашел на курс
    if (courseData.activeCourse === 0) {
      // есть запись о том, какой курс пользователь смотрел ранее
      if (localStorage.getItem('activeCourse')) {
        const local = Number(localStorage.getItem('activeCourse'));
        if (!findCourse(local)) {
          navigate('/'); // попытка попасть в удаленный курс
          return;
        }
        courseData.setActiveCourse(local);
        setCourse(courseData.courses.find((item) => item.course_id === local));
        setLoading(false);
      } else {
        // если нет записей о предыдущей сессии, то отправить на главную
        navigate('/');
      }
    }
    // ну тут просто юзер *тык*нул на курсик
    setCourse(
      courseData.courses.find(
        (item) => item.course_id === courseData.activeCourse,
      ),
    );
  }, [courseData.activeCourse]);

  const toCourses = () => navigate('/courses');

  const pre_course_name = findCourseName();

  // ждем-с
  if (course === null) {
    return (
			<div className='block'>
				<div className='title_container desktop_only'>
					<h1>{pre_course_name}</h1>
				</div>

				<div
					onClick={toCourses}
					className='title_container back_container tablet'
				>
					<CaretLeft weight='bold' className='icon_mid' />
					<h2>{pre_course_name}</h2>
				</div>
				<LoaderCourse />
			</div>
    );
  }

  return (
		<div className='course-block'>
			<div className='title_container desktop_only'>
				<h1>{course.course_name}</h1>
			</div>

			<div
				onClick={toCourses}
				className='title_container back_container tablet'
			>
				<CaretLeft weight='bold' className='icon_mid' />
				<h2>{course.course_name}</h2>
			</div>

			{/* <CourseInfo /> */}

			<div className='element_container'>
				<div className='title_container'>
					<h3>Задания</h3>
				</div>
				{!course.tasks.length && (
					<div className='content_cover'>
						<div className='content_elem_row low_opacity'>
							<XCircle weight='bold' className='icon_min' />
							<p>Нет доступных</p>
						</div>
					</div>
				)}
				<div className='content_cover'>
					{course.tasks.map((item, index) => (
						<CourseItem
							item={item}
							key={item.courseTaskID}
							isBreaker={index !== course.tasks.length - 1}
						/>
					))}
				</div>
			</div>

			<Materials items={course.courseMaterials} />
		</div>
  );
});

export default Course;
