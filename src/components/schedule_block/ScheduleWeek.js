import { XCircle } from '@phosphor-icons/react';
import ScheduleDay from './ScheduleDay';

const ScheduleWeek = ({ weekData }) => (
		<>
			{weekData.map((day) => (
				<ScheduleDay key={day.dayIndex} day={day} />
			))}
			{!weekData.length && (
				<div className='content_cover'>
					<div className='content_elem_row low_opacity'>
						<XCircle weight='bold' className='icon_min' />
						<p>Расписание отсутствует</p>
					</div>
				</div>
			)}
		</>
);

export default ScheduleWeek;
