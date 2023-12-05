import { CaretRight } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import getStatusIcon from '../../managers/statusManager.jsx';

const CourseItem = ({ item, isBreaker }) => {
  // console.log(item)
  const navigate = useNavigate();

  const openTask = () => {
    // console.log(item)
    localStorage.setItem('taskId', item.courseTaskID);
    navigate('/task');
  };

  return (
		<>
			<div className='content_elem_row select' onClick={openTask}>
				<div className='content_inner_column'>
					<h4>{item.nameTask}</h4>
					<div className={`lighter ${getStatusIcon(item.statusID).color}`}>
						{getStatusIcon(item.statusID).icon}
						<p className={`${getStatusIcon(item.statusID).text}`}>{item.statusName}</p>
					</div>
				</div>
				<CaretRight weight='bold' className='icon_mid' />
			</div>

			{isBreaker && <div className='breaker'></div>}
		</>
  );
};

export default CourseItem;
