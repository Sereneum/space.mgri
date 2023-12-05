import { Plus } from '@phosphor-icons/react';
import React, { useState } from 'react';

const Accordion = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionToggle = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
        <div className="content_elem_column select" onClick={handleAccordionToggle}>
            <div className={`accordion ${isExpanded ? 'expanded' : ''}`}>
                <div className="accordion-toggle">
                    <span className={`accordion-icon ${isExpanded ? 'rotate' : ''}`}>
                        <Plus weight="bold" className="icon_min low_opacity"/>
                    </span>
                    <h4>{props.title}</h4>
                </div>
                <div className="accordion-content low_opacity">
                    <p className="accordion_text">{props.description}</p>
                </div>
            </div>
        </div>
  );
};

export default Accordion;
