import {
  EnvelopeSimple, CalendarBlank, StarFour, ClockCountdown, List,
} from '@phosphor-icons/react';

import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Messages from './Messages';

const Navbar = () => {
  const customLink = (link, icon, isDes = false) => <NavLink
        to={link}
        className={`nav_elem_container nav_bar_mobile_container ${isDes && 'nav_tablet'}`}
    >
        {icon}
    </NavLink>;

  return (
        <nav className="nav_bar_container">

          <Messages />

            <div className="nav_bar nav_bar_mobile">
                {customLink('/', <CalendarBlank weight="bold" className="icon_nav icon_nav_mobile"/>)}
                {customLink('/courses', <StarFour weight="bold" className="icon_nav icon_nav_mobile"/>, true)}
                {customLink('/deadlines', <ClockCountdown weight="bold" className="icon_nav icon_nav_mobile"/>, true)}
                {customLink('/menu', <List weight="bold" className="icon_nav icon_nav_mobile"/>)}
            </div>
        </nav>
  );
};

export default Navbar;
