import { Sun, Moon, Devices } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import { themeManager } from '../../managers/themeManager';
import { Context } from '../../index';

export const ThemeSelector = () => {
  const [theme, setTheme] = useState(null);
  const { localConfig } = useContext(Context);

  const activeMode = { backgroundColor: 'var(--var-push)' };

  const loadingTheme = (localConfig, newTheme = null) => {
    themeManager(localConfig).setStore(newTheme);
    themeManager(localConfig).setStyle();
    setTheme(newTheme || themeManager(localConfig).checkLocalStorage());
  };

  const changeTheme = (str) => loadingTheme(localConfig, str);

  useEffect(() => {
    loadingTheme(localConfig, null);
  }, []);

  return <div className='theme-selector-wrapper'>
		<div
			className='theme-selector-item select'
			style={theme === 'light' ? activeMode : {}}
			onClick={() => { changeTheme('light'); }}
		>
			<Sun weight="bold" className="icon_min"/>
		</div>

		<div
			className='theme-selector-item select'
			style={theme === 'dark' ? activeMode : {}}
			onClick={() => { changeTheme('dark'); }}
		>
			<Moon weight="bold" className="icon_min"/>
		</div>

		<div
			className='theme-selector-item select'
			style={theme === 'system' ? activeMode : {}}
			onClick={() => { changeTheme('system'); }}
		>
			<Devices weight="bold" className="icon_min"/>
		</div>
</div>;
};
