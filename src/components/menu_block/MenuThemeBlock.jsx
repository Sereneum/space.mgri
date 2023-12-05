import { useContext } from 'react';
import { Devices, Moon, Sun } from '@phosphor-icons/react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { themeManager } from '../../managers/themeManager';

const MenuThemeBlock = observer(() => {
  const { localConfig } = useContext(Context);

  const setTheme = (newTheme) => {
    themeManager(localConfig).setStore(newTheme);
    themeManager(localConfig).setStyle();
  };

  const invBg = (theme) => (localConfig.theme === theme ? 'enabled_invert' : '');

  const invTxt = (theme) => (localConfig.theme === theme ? 'theme_enabled_text' : '');

  return (
		<div className='content_cover'>
			<div className='content_elem_column'>
				<p>Оформление</p>
				<div className='container_row_start'>
					{/*  LIGHT  */}
					<div
						className='theme_item_container'
						onClick={() => setTheme('light')}
					>
						<div className={`theme_circle ${invBg('light')}`}>
							<Sun weight='bold' className='icon_big' />
						</div>
						<p className={`theme_text ${invTxt('light')}`}>Светлое</p>
					</div>
					{/*  DARK  */}
					<div
						className='theme_item_container'
						onClick={() => setTheme('dark')}
					>
						<div className={`theme_circle ${invBg('dark')}`}>
							<Moon weight='bold' className='icon_big' />
						</div>
						<p className={`theme_text ${invTxt('dark')}`}>Темное</p>
					</div>

					{/*  SYSTEM  */}
					<div
						className='theme_item_container'
						onClick={() => setTheme('system')}
					>
						<div className={`theme_circle ${invBg('system')}`}>
							<Devices weight='bold' className='icon_big' />
						</div>
						<p className={`theme_text ${invTxt('system')}`}>Системное</p>
					</div>
				</div>
			</div>
		</div>
  );
});

export default MenuThemeBlock;
