import { GlobeHemisphereEast } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

const GeoLabs = () => (
			<NavLink to={'/credits'} className='geolabs-container'>
				<GlobeHemisphereEast weight="bold" className='geolabs-icon'/>
				<h2>ГЕОЛАБС</h2>
			</NavLink>
	 );

export default GeoLabs;
