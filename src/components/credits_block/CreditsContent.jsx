import GeoLabsPaint from './GeolabsPaint';

const CreditsContent = () => (
		<>
			<div className='element_container'>
				<GeoLabsPaint />
				<div className='title_container' style={{ marginTop: '20px' }}>
					<h3>Создатели</h3>
				</div>
				<div className='content_cover'>
					<div className='content_elem_column'>
						<div className='container_column_start'>
							<h4>Романов Максим</h4>
							<p className='low_opacity' style={{ fontWeight: '500' }}>
								Бэкенд, фронтенд-разработка
							</p>
						</div>
					</div>
				</div>
				<div className='content_cover'>
					<div className='content_elem_column'>
						<div className='container_column_start'>
							<h4>Могильников Михаил</h4>
							<p className='low_opacity' style={{ fontWeight: '500' }}>
								Фронтенд-разработка, веб-дизайн, UI/UX
							</p>
						</div>
					</div>
				</div>
				<div className='title_container'>
					<p className='bottom_text' style={{ fontWeight: '500' }}>
						Группа ПИ-20 <br /> Кафедра информатики и геоинформационных систем
					</p>
				</div>
				<div className='title_container' style={{ marginTop: '20px' }}>
					<h3>Руководитель проекта</h3>
				</div>
				<div className='content_cover'>
					<div className='content_elem_column'>
						<div className='container_column_start'>
							<h4>Нагайцев Михаил Владимирович</h4>
						</div>
					</div>
				</div>
				<div className='title_container'>
					<p className='bottom_text' style={{ fontWeight: '500' }}>
						Российский государственный геологоразведочный университет имени
						Серго Орджоникидзе
					</p>
				</div>
			</div>
		</>
);

export default CreditsContent;
