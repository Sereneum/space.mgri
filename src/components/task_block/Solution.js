import { useState } from 'react';
import '../../styles/modal.css';

import { Plus } from '@phosphor-icons/react';
import SolutionFile from './SolutionFile';
import SolutionModal from './SolutionModal';

/* Блок с решением задания (прикрепление + уже прикрепленные файлы) */
const Solution = ({
  files, parameters, loadingTaskData, isSuccess,
}) => {
  const [isModal, setIsModal] = useState(false);
  const setModal = () => setIsModal((prev) => !prev);

  if (files.length === 0 && isSuccess) return <></>;

  return (
		<div className='element_container'>
			<div className='title_container'>
				<h3>Решение</h3>
			</div>

			<div className='content_cover'>
				{/* Прикрепленные файлы */}
				{files
				  .slice() // Создаем копию массива
				  .reverse() // Переворачиваем копию массива
				  .map((file, index) => (
						<SolutionFile
							file={file}
							key={file.fileID}
							fileID={file.fileID}
							isSuccess={isSuccess}
							loadingTaskData={loadingTaskData}
							isLast={index === files.length - 1}
						/>
				  ))}

				{/* Открыть модалку */}
				{!isSuccess && (
					<div onClick={setModal} className='content_elem_row select'>
						<Plus weight='bold' className='icon_min' height={'24px'} />
						<p>Добавить</p>
					</div>
				)}

				{/* Модалка, куда прикрепляются курсы */}
				<SolutionModal
					isModal={isModal}
					setModal={setModal}
					loadingTaskData={loadingTaskData}
					parameters={parameters}
				/>
			</div>
		</div>
  );
};

export default Solution;
