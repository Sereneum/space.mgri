import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  Clock,
  DownloadSimple,
  FilePdf,
  FileZip,
  GraduationCap,
  PencilSimple,
  Plus,
  Trash,
} from '@phosphor-icons/react';

const TaskPreview = () => (
		<div className='block'>
			<div
				className='title_container back_container'
				style={{ cursor: 'default' }}
			>
				<CaretLeft weight='bold' className='icon_mid' />
				<h2>3ЛР Механические колебания</h2>
			</div>

			<div className='element_container'>
				<div className='title_container'>
					<h3>Файл задания</h3>
				</div>

				<div className='content_cover'>
					<div className='content_elem_row '>
						<FileZip weight='bold' className='icon_mid' />
						<p className='text_file'>ПИ-20_сейсм_3ЛР_задание.rar</p>
						<DownloadSimple weight='bold' className='icon_mid' />
					</div>
				</div>
			</div>

			<div className='element_container'>
				<div className='title_container'>
					<h3>Информация</h3>
				</div>

				<div className='content_cover'>
					<div className='content_elem_column'>
						<div className='container_row_start' style={{ flexWrap: 'wrap' }}>
							<div className='lighter pract'>
								<PencilSimple weight='bold' className='icon_min text_lighter' />
								<p className='text_lighter'>На доработке</p>
							</div>
							<div className='lighter not_checked'>
								<Clock weight='bold' className='icon_min' />
								<p>10 часов</p>
							</div>
						</div>

						<div className='column_container_mini'>
							<div className='container_row_start extended_gap'>
								<GraduationCap weight='bold' className='icon_min' />
								<p>Романов В.В.</p>
							</div>
							<div className='container_row_start extended_gap'>
								<CalendarBlank weight='bold' className='icon_min' />
								<p>06.10.2023 - 17.03.2023</p>
							</div>
						</div>
					</div>
				</div>

				<div className='content_cover'>
					<div className='content_elem_row'>
						<ChatCircle weight='bold' className='icon_min' />
						<p>Неверно вычислен пункт 1, 2. Ошибки в оформлении.</p>
					</div>
				</div>
			</div>

			<div className='element_container'>
				<div className='title_container'>
					<h3>Решение</h3>
				</div>

				<div className='content_cover'>
					<div className='container_row_zero'>
						<div className='content_elem_row'>
							<FileZip weight='bold' className='icon_mid' />
							<p className='text_file'>ПИ-20_1сейсм_3ЛР_задание.rar</p>
							<DownloadSimple weight='bold' className='icon_mid' />
						</div>

						<div className='breaker_ver'></div>

						<div className='button_cover_elem'>
							<div className='button_red'>
								<Trash weight='bold' className='exit_text' size={'20px'} />
							</div>
						</div>
					</div>

					<div className='breaker'></div>

					<div className='content_elem_row '>
						<Plus weight='bold' className='icon_min' height={'24px'} />
						<p>Добавить</p>
					</div>
				</div>
			</div>
			<div className='element_container'>
				<div className='title_container'>
					<h3>Материалы курса</h3>
				</div>

				<div className='content_cover'>
					<div className='content_elem_row select'>
						<FilePdf weight='bold' className='icon_mid' />
						<p className='text_file'>Оформление работ_2023_исправления.pdf</p>
						<ArrowSquareOut weight='bold' className='icon_mid' />
					</div>

					<div className='breaker'></div>

					<div className='content_elem_row select'>
						<FilePdf weight='bold' className='icon_mid' />
						<p className='text_file'>test.pdf</p>
						<ArrowSquareOut weight='bold' className='icon_mid' />
					</div>
				</div>
			</div>
		</div>
);

export default TaskPreview;
