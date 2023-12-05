import { CaretLeft } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import PrivacyContent from './PrivacyContent';

const Privacy = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
        <div className={'block solo_block'}>
            <div onClick={back} className="title_container back_container">
                <CaretLeft weight="bold" className="icon_mid"/>
                <h2>Политика конфиденциальности</h2>
            </div>

            <PrivacyContent/>

        </div>
  );
};

export default Privacy;
