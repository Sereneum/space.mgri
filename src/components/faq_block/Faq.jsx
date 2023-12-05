import { CaretLeft } from '@phosphor-icons/react';
import '../../styles/faq.css';
import { useNavigate } from 'react-router-dom';
import FaqContent from './FaqContent';

export const Faq = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
        <div className="block solo_block">

            <div onClick={back} className="title_container back_container">
                <CaretLeft weight="bold" className="icon_mid"/>
                <h2>Помощь и возможности</h2>
            </div>

            <FaqContent/>

        </div>
  );
};
