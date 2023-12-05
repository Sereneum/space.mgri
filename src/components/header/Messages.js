import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { EnvelopeSimple } from '@phosphor-icons/react';
import { observer } from 'mobx-react-lite';
import { epoch_checkerMail } from '../../http/epochServer';
import { Context } from '../../index';

const Messages = observer(() => {
  const { localConfig } = useContext(Context);
  const access = localConfig.msg.value;
  const [msg, setMsg] = useState(0);

  useEffect(() => {
    if (access) {
      epoch_checkerMail()
        .then((r) => setMsg(r.data.count));
    }
  }, [localConfig.msg.value]);

  return (
        <div className="nav_bar">
            <NavLink to="https://stud.mgri.ru/WebApp/#/mail/all" target="_blank" rel="noreferrer" className="nav_elem_container " style={{ opacity: '1' }}>
                <EnvelopeSimple weight="bold" className="icon_nav" style={{ opacity: '0.6' }}/>
                {access && msg ? <div className='messages'>{msg}</div> : ''}
            </NavLink>
        </div>
  );
});

export default Messages;
