import {
  Check,
  Clock,
  PencilSimple,
  WarningCircle,
  X,
} from '@phosphor-icons/react';
import React from 'react';

export default getStatusIcon = (statusID) => {
  if (statusID === 0) {
    return {
      color: 'not_checked',
      icon: <WarningCircle weight="bold" className="icon_min icon-lighter" />,
      text: '',
    };
  }
  if (statusID === 1) {
    return {
      color: 'declined',
      icon: <X weight="bold" className="icon_min icon-lighter text_lighter" />,
      text: 'text_lighter',
    };
  }
  if (statusID === 2) {
    return {
      color: 'exam',
      icon: <Clock weight="bold" className="icon_min icon-lighter text_lighter" />,
      text: 'text_lighter',
    };
  }
  if (statusID === 3) {
    return {
      color: 'pract',
      icon: <PencilSimple weight="bold" className="icon_min icon-lighter text_lighter" />,
      text: 'text_lighter',
    };
  }
  if (statusID === 4) {
    return {
      color: 'lect',
      icon: <Check weight="bold" className="icon_min icon-lighter text_lighter" />,
      text: 'text_lighter',
    };
  }
};
