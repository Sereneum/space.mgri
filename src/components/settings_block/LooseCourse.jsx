import { CalendarBlank, GraduationCap, PushPin } from '@phosphor-icons/react';
import { slashToPoint } from '../../managers/timeManager';

const LooseCourse = ({ item, isLast, choose }) => (
		<>
			<div
				className='content_elem_row select'
				onClick={choose}
				// onClick={() => choose(
				//     {
				//         course_id: item.course_id,
				//         course_name: item.course_name
				//     }
				// )}
			>
				<div className='content_inner_column'>
					<h4>{item.course_name}</h4>
					<div className='container_row_start'>
						<div className='column_container_mini low_opacity'>
							<div className='container_row_start'>
								<GraduationCap weight='bold' className='icon_min' />
								<p>{item.userName}</p>
							</div>
							<div className='container_row_start'>
								<CalendarBlank weight='bold' className='icon_min' />
								<p>{slashToPoint(item.dateCreate)}</p>
							</div>
						</div>
					</div>
				</div>
				<PushPin weight='bold' className='icon_min' />
			</div>

			{!isLast && <div className='breaker'></div>}
		</>
);

export default LooseCourse;
