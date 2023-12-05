import { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { themeManager } from '../managers/themeManager';

const useThemeDetector = () => {
  const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)');
  const { localConfig } = useContext(Context);
  const [isThemeDetector, setIsThemeDetector] = useState(null);

  useEffect(() => {
    const updateTheme = () => {
      if (localConfig.theme === 'system') {
        themeManager(localConfig).setStyle();
        setIsThemeDetector(themeManager(localConfig).isLight());
      }
    };

    // Если пользователь меняет свою предпочитаемую системную схему цветов
    lightModeQuery.addEventListener('change', updateTheme);

    // Вызовите updateTheme при монтировании и каждый раз, когда localConfig.theme меняется
    updateTheme();

    // Удалить обработчик событий при размонтировании
    return () => {
      lightModeQuery.removeEventListener('change', updateTheme);
    };
  }, [localConfig.theme]);

  return { isThemeDetector };
};

export default useThemeDetector;
