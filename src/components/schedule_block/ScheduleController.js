import React, { useState } from 'react';
import { CalendarBlank, CaretDown } from '@phosphor-icons/react';
import { CSSTransition } from 'react-transition-group';
import { slashToPoint } from '../../managers/timeManager';
import ScheduleCalendar from './ScheduleCalendar';

const ScheduleController = ({ weekID, updateWeek, calendar }) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalControl = () => setIsVisible((prev) => !prev);

  return (
		<>
			<div className='calendar_block' onClick={modalControl}>
				<CalendarBlank weight='bold' className='icon_min' />
				<h4 className='date'>{slashToPoint(weekID)}</h4>

				<CSSTransition
					timeout={1000}
					in={isVisible}
					classNames={'arrow-animation'}
				>
					<CaretDown weight='bold' className='icon_min' />
				</CSSTransition>
			</div>

			<ScheduleCalendar
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				weekID={weekID}
				updateWeek={updateWeek}
				calendar={calendar}
			/>
		</>
  );
};

export default ScheduleController;
