import {
  CalendarBlank,
  CaretDown,
  GraduationCap,
  MapPin,
} from '@phosphor-icons/react';

const SchedulePreview = () => (
		<div className='block'>
			<div className='title_container'>
				<h1>Расписание</h1>
			</div>

			<div className='calendar_block'>
				<CalendarBlank weight='bold' className='icon_min' />
				<h4 className='date'>17.10.2023</h4>
				<CaretDown weight='bold' className='icon_min' />
			</div>

			<div className='element_container'>
				<div className='title_container'>
					<h3>Вторник</h3>
					<h4 className='date'>17.10.2023</h4>
				</div>
				<div className='content_cover'>
					<div className='content_elem_column'>
						<div className='container_row_start'>
							<div className='lighter lab'>
								<p className='text_lighter'>9:30 – 11:00</p>
							</div>
							<div className='lesson_active'></div>
						</div>
						<h3>лаб Информационные системы и технологии</h3>
						<div className='column_container_mini low_opacity'>
							<div className='container_row_start'>
								<GraduationCap weight='bold' className='icon_min' />
								<p>проф.Ахметсафин Л.М.</p>
							</div>
							<div className='container_row_start'>
								<MapPin weight='bold' className='icon_min' />
								<p>каб. 348</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='element_container'>
				<div className='title_container'>
					<h3>Среда</h3>
					<h4 className='date'>18.10.2023</h4>
				</div>
				<div className='content_cover'>
					<div className='content_elem_column'>
						<div className='container_row_start'>
							<div className='lighter pract'>
								<p className='text_lighter'>11:15 – 13:10</p>
							</div>
							<div className='lesson_active hidden'></div>
						</div>
						<h3>прак Геолого-геофизические информационные комплексы</h3>
						<div className='column_container_mini low_opacity'>
							<div className='container_row_start'>
								<GraduationCap weight='bold' className='icon_min' />
								<p>зав Каф Оборнев Е.А.</p>
							</div>
							<div className='container_row_start'>
								<MapPin weight='bold' className='icon_min' />
								<p>каб. 343</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
);

export default SchedulePreview;
