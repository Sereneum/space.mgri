import {
  CloudArrowUp,
  FilePlus,
  LinkSimple,
  Paperclip,
  Plus,
  X,
} from '@phosphor-icons/react';
import { CSSTransition } from 'react-transition-group';

const AddSolutionModal = ({ setModal, isModal }) => (
		<div className='modal_wrapper'>
			<CSSTransition
				in={isModal}
				classNames={'modal_bg_anim'}
				timeout={200}
				mountOnEnter
			>
				<div onClick={setModal} className='modal_bg'></div>
			</CSSTransition>

			<CSSTransition
				in={isModal}
				timeout={1000}
				classNames={'modal_anim'}
				mountOnEnter
			>
				<div className='modal'>
					<div className='title_container'>
						<Paperclip weight='bold' className='icon_mid' size={'28px'} />
						<h1 className='modal_title_text'>Прикрепить решение</h1>
						<X
							onClick={setModal}
							weight='bold'
							className='icon_mid pointer'
							size={'28px'}
						/>
					</div>
					<div className='element_container'>
						<div className='title_container'>
							<FilePlus weight='bold' className='icon_mid' />
							<h3>Файл</h3>
						</div>

						<div className='attach_cover desktop_only'>
							<div className='attach_container select'>
								<CloudArrowUp
									weight='bold'
									className='icon_big'
									size={'40px'}
								/>
								<p>Выберите файл с устройства или перетащите его в это окно</p>
							</div>
						</div>

						<div className='content_cover tablet'>
							<div className='content_elem_row select'>
								<CloudArrowUp weight='bold' className='icon_mid' />
								<p>Загрузить с устройства</p>
								<Plus weight='bold' className='icon_mid' />
							</div>
						</div>
					</div>
					<div className='element_container'>
						<div className='title_container'>
							<LinkSimple weight='bold' className='icon_mid' />
							<h3>Ссылка</h3>
						</div>
						<div className='content_cover'>
							<div className='content_elem_row'>
								<input
									className='input'
									placeholder='Наименование URL-ссылки'
								/>
							</div>

							<div className='breaker'></div>

							<div className='content_elem_row'>
								<input className='input' placeholder='URL-ссылка' />
							</div>
						</div>
						<div onClick={setModal} className='button_main'>
							<h4 className='text_button_main'>Добавить</h4>
						</div>
					</div>
				</div>
			</CSSTransition>
		</div>
);

export default AddSolutionModal;
