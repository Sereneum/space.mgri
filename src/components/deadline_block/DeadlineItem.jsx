import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CaretRight, Clock } from '@phosphor-icons/react';
import { timeManager } from '../../managers/timeManager';

const DeadlineItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // открывает задание
  const toTask = () => {
    // по этому id берется задание в /task
    localStorage.setItem('taskId', item.courseTaskID);
    // переход в /task без дублирования в истории браущера
    if (location.pathname === '/task') { navigate('/task', { replace: true }); } else { navigate('/task'); }
  };

  return (
        <div className="content_cover select-zoom" onClick={toTask}>
            <div className="content_elem_row">
                <div className="content_inner_column">
                    <h3>{item.courseName}</h3>
                    <p className="low_opacity">{item.nameTask}</p>
                    <div className="lighter not_checked">
                        <Clock weight="bold" className="icon_min"/>
                        <p>{timeManager(item.periodRealization)}</p>
                    </div>
                </div>
                <CaretRight weight="bold" className="icon_mid tablet"/>
            </div>
        </div>
  );
};

export default DeadlineItem;
