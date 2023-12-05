import DarkSky from './DarkSky';
import LightStars from './LightStars';

const Sky = ({ isLight }) => <>{isLight ? <LightStars /> : <DarkSky />}</>;

export default Sky;
