import Navbar from './Navbar';
import { ThemeSelector } from './ThemeSelector';
import '../../styles/scss/header.scss';
import { NavLink } from 'react-router-dom';

function Header({ isAuth }) {
  return (
		<header className='header_container'>
			{isAuth ? (
				<h1 className='project_title'>Space</h1>
			) : (
				<NavLink to={'/home'} className='project_title'>
					Space
				</NavLink>
			)}
			{isAuth ? <Navbar /> : <ThemeSelector />}
		</header>
  );
}

export default Header;
