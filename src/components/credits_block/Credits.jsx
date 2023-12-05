import { CaretLeft } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CreditsContent from './CreditsContent';
import { Context } from '../../index';

const Credits = () => {
  const navigate = useNavigate();
  const { localConfig } = useContext(Context);
  return (
		<div className={'block solo_block'}>
			<div
				className='title_container back_container'
				onClick={() => navigate(-1)}
			>
				<CaretLeft weight='bold' className='icon_mid' />
				<h2>Авторы</h2>
			</div>

			<CreditsContent />
		</div>
  );
};

export default Credits;
