import {
  assignorIcon,
  assignorIconDownload,
  handleDownload,
} from '../../managers/files_manager';

const Material = ({ item, isBreaker }) => (
		<>
			<div
				className='content_elem_row select'
				onClick={() => handleDownload(item.nameFile, item?.link, item?.fileID)}
			>
				{assignorIcon(item.nameFile)}
				<p className='text_file'>
					{item.nameFile
					  ? item.nameFile
					  : item.nameLink
					    ? item.nameLink
					    : 'Безымянная ссылка'}
				</p>
				{assignorIconDownload(item.nameFile)}
			</div>

			{isBreaker && <div className='breaker'></div>}
		</>
);

export default Material;
