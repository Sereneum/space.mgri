import { useEffect, useRef, useState } from 'react';
import {
  CalendarBlank, GraduationCap, PencilSimple, PushPinSlash,
} from '@phosphor-icons/react';
import TextareaAutosize from 'react-textarea-autosize';
import { slashToPoint } from '../../managers/timeManager';

const FixedCourse = ({
  item, choose, localIndex, rename,
}) => {
  const [isInputMode, setIsInputMode] = useState(false);
  const [input, setInput] = useState(item.course_name ? item.course_name : '');
  const ref = useRef(null);

  const change = (e) => {
    setInput(e.target.value);
    rename(e.target.value, localIndex);
  };

  // когда нажимаю на кнопку
  const activeChange = () => {
    if (!isInputMode) setIsInputMode(true);
  };

  const handleBlur = () => {
    setIsInputMode(false);
  };

  useEffect(() => {
    if (isInputMode) {
      const textarea = ref.current;
      textarea.focus();
      textarea.setSelectionRange(input.length, input.length);
    }
  }, [isInputMode, input]);

  return (
		<div className='content_cover'>
			<div className='content_elem_column'>
				{isInputMode ? (
					<TextareaAutosize
						value={input}
						onChange={change}
						className='input-big'
						ref={ref}
						onBlur={handleBlur}
						name='rename'
					/>
				) : (
					<h3>{item.course_name}</h3>
				)}

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

				<div className='container_row_start'>
					{/* change */}
					<div
						onClick={activeChange}
						className='button_settings edit'
						style={{ filter: `invert(${isInputMode ? '100%' : '0'})` }}
					>
						<PencilSimple weight='bold' className='icon_min' />
						<p className='text_min'>Изменить</p>
					</div>
					{/* unpin */}
					<div className='button_settings unpin' onClick={choose}>
						<PushPinSlash weight='bold' className='icon_min red' />
						<p className='text_min red'>Открепить</p>
					</div>
				</div>
			</div>
		</div>
  );
};

export default FixedCourse;
