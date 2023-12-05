import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authCheck } from '../http/userApi';
import { Context } from '..';
import { epoch_courseData, epoch_fetchServerData } from '../http/epochServer';
import { themeManager } from '../managers/themeManager';
import { smoothTsManager } from '../managers/smoothTsManager';
import { devPrint } from '../managers/devTools';

const next = (id, end, courseData, localConfig) => {
  loadingCourses(id)
    .then((r) => {
      console.log('courses: ', r.courses);
      // список заданий с бд
      courseData.setActiveCourse(r.serverData.active);
      courseData.setCourses(r.courses);
      loadingLocalConfig(localConfig);
      loadingTheme(localConfig);
      end();
    })
    .catch((err) => console.log(err));
};

/* подгрузка активных курсов с бд + настроек */
const loadingCourses = async (id) => new Promise((upperRes, upperRej) => {
  epoch_fetchServerData(id)
    .then((serverData) => {
      console.log(serverData);
      Promise.all(
        serverData.active.map((i) => epoch_courseData(i.course_id, i.course_name)),
      ).then((r) => upperRes({ courses: r, serverData }));
    })
    .catch((err) => upperRej(err));
});

/* получение локальных конфигураций */
const loadingLocalConfig = (localConfig) => {
  const check = (key) => {
    const localKey = localStorage.getItem(key);
    if (localKey === null) return true; // default value
    return Boolean(Number(localStorage.getItem(key)));
  };

  localConfig.setSky({
    text: localConfig.sky.text,
    key: localConfig.sky.key,
    value: check(localConfig.sky.key),
  });

  localConfig.setMsg({
    text: localConfig.msg.text,
    key: localConfig.msg.key,
    value: check(localConfig.msg.key),
  });

  localConfig.setSmoothTs({
    text: localConfig.smoothTs.text,
    key: localConfig.smoothTs.key,
    value: check(localConfig.smoothTs.key),
  });
};

/*  */
const loadingTheme = (localConfig) => {
  themeManager(localConfig).setStore(null);
  themeManager(localConfig).setStyle();
};

const loadingSmoothTs = (localConfig) => {
  smoothTsManager(localConfig).setStore(null);
};

const navigateAfterBadTryLogin = (navigate, path) => {
  if (path !== '/login' || path !== '/credits') navigate('/home');
};

const useApp = () => {
  const { user, courseData, localConfig } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const mainPreloadingDate = () => {
    authCheck()
      .then((r) => {
        devPrint('authCheck: ');
        devPrint('process.env', process.env);
        if (!user.isAuth) user.setIsAuth(true);
        user.setUserData(r.data.data.user);
        const id = r.data.data.user.anotherID;
        // console.log(id, r.data.data.user)
        /* загрузка курсов */
        next(id, () => setIsLoading(false), courseData, localConfig);
      })
      .catch((err) => {
        devPrint(err);
        try {
          if (err.response.status === 401) {
            // пользователь не авторизован
            if (user.isAuth) user.setIsAuth(false);
            navigateAfterBadTryLogin(navigate, location.pathname);
            setIsLoading(false);
          } else {
            devPrint(`Ошибка со статусом ${err.response.status}`);
            setIsError(true);
          }
        } catch (catchErr) {
          devPrint('Непредвиденная ошибка', catchErr);
          setIsError(true);
        }
      });
  };

  useEffect(mainPreloadingDate, []);

  return { isLoading, isAuth: user.isAuth, isError };
};

export default useApp;
