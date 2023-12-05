import { XCircle } from '@phosphor-icons/react';
import Material from './Material.jsx';
import { useEffect } from 'react';

const Materials = ({ items = [] }) => {
  useEffect(() => {
    console.log({ Materials: items });
  }, [items]);

  return (
    <div className="element_container">
      <div className="title_container">
        <h3>Материалы курса</h3>
      </div>

      <div className="content_cover">
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <Material
              item={item}
              isBreaker={index !== items.length - 1}
              key={`m_${index}`}
            />
          ))}
        {!items.length && (
          <div className="content_elem_row low_opacity">
            <XCircle weight="bold" className="icon_min" />
            <p>Материалы отсутствуют</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Materials;
