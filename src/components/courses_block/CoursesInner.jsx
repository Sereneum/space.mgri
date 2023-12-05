import { GearFine, CaretRight, Plus } from '@phosphor-icons/react';

import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

const CoursesInner = observer(() => {
  const { courseData } = useContext(Context);
  const navigate = useNavigate();

  const toCourse = (course_id) => {
    courseData.setActiveCourse(course_id);
    localStorage.setItem('activeCourse', course_id);
    navigate('/course');
  };

  const course = (name, course_id) => <div
        onClick={() => toCourse(course_id)}
        className="course_list_item select-zoom"
        key={course_id}
    >
        <h3>{name}</h3>
        <CaretRight weight="bold" className="icon_min"/>
    </div>;

  return (
        <>
            <div className="title_container">
                <h1>Курсы</h1>
                <NavLink to="/settings" className="button_cover">
                    <GearFine weight="bold" className="icon_mid"/>
                </NavLink>
            </div>
            {
                courseData.courses.length
                  ? <div className="course_list_container">
                        {
                            courseData.courses.map((item) => course(item.course_name, item.course_id))
                        }
                    </div>
                  : <NavLink to="/settings" className="course_list_item select-zoom">
                        <h3>Добавить</h3>
                        <Plus weight="bold" className="icon_min"/>
                    </NavLink>
            }
        </>
  );
});

export default CoursesInner;
