import { CalendarBlank, GraduationCap } from '@phosphor-icons/react';

const CourseInfo = () => (
		<div className='element_container'>
			<div className='title_container'>
				<h3>Информация</h3>
			</div>

			<div className='content_cover'>
				<div className='content_elem_column'>
					<div className='column_container_mini'>
						<div className='container_row_start extended_gap'>
							<GraduationCap weight='bold' className='icon_min' />
							<p>Оборнев Иван Евгеньевич</p>
						</div>

						<div className='container_row_start extended_gap'>
							<CalendarBlank weight='bold' className='icon_min' />
							<p>26.09.2023</p>
						</div>
					</div>
				</div>
			</div>
		</div>
);

export default CourseInfo;
