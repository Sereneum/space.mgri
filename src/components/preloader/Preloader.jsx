import { useEffect } from 'react';
import Reach from './Reach.jsx';
import Unreach from './Unreach.jsx';

const Preloader = ({ isLoading, isThemeDetector, isError }) => {
  const updateThemeColor = (color) => {
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', color);
    }
  };

  useEffect(() => {
    if (isLoading) {
      updateThemeColor('black');
    } else {
      updateThemeColor(isThemeDetector ? '#ededed' : '#000000');
    }
  }, [isLoading, isThemeDetector]);

  return (
		<div className='preloader'>
			{
				isError
				  ?					<Unreach />
				  :					<Reach />

			}
			{/* /!* *!/ */}
			{/* <Unreach /> */}
		</div>
  );
};

export default Preloader;
