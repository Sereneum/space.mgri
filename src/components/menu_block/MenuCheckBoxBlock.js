import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import MenuCheckBoxItem from './MenuCheckBoxItem';
import { Context } from '../../index';

const MenuCheckBoxBlock = observer(() => {
  const { localConfig } = useContext(Context);
  const config = [
    { obj: { ...localConfig.sky }, setter: (obj) => localConfig.setSky(obj) },
    { obj: { ...localConfig.smoothTs }, setter: (obj) => localConfig.setSmoothTs(obj) },
    { obj: { ...localConfig.msg }, setter: (obj) => localConfig.setMsg(obj) },
  ];

  const set = (index) => {
    const newValue = !config[index].obj.value;
    localStorage.setItem(config[index].obj.key, `${Number(newValue)}`);
    config[index].setter({ ...config[index].obj, value: newValue });
  };

  return (
		<div className='content_cover'>
			{config.map((item, index) => (
				<MenuCheckBoxItem
					item={item.obj}
					key={`s${index}`}
					isLast={index === config.length - 1}
					set={() => set(index)}
				/>
			))}
		</div>
  );
});

export default MenuCheckBoxBlock;
