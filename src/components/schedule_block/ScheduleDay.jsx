import ScheduleLesson from './ScheduleLesson';

const ScheduleDay = ({ day }) => (
		<>
			<div className='element_container'>
				{/* TITLE DAY */}
				<div className='title_container'>
					<h3>{day.day}</h3>
					<h4 className='date'>{day.date}</h4>
				</div>

				{/* LESSONS BLOCK */}
				<div className='content_cover'>
					{day.lessons.map((i, index) => (
						<ScheduleLesson
							lesson={i}
							key={i['код']}
							isLast={index === day.lessons.length - 1}
						/>
					))}
				</div>
			</div>

			{/* <div className="breaker"></div> */}
		</>
);

export default ScheduleDay;
