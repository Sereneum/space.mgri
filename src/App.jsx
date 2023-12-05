import './styles/main.css';
import './styles/schedule.scss';

import { useContext } from 'react';

import { observer } from 'mobx-react-lite';
import { CSSTransition } from 'react-transition-group';
import ScrollToTop from './components/scroll_to_top/ScrollToTop.jsx';

import Sky from './components/sky/Sky.jsx';
import Header from './components/header/Header.js';
import Courses from './components/courses_block/Courses.js';
import Deadline from './components/deadline_block/Deadline.js';
import { Context } from './index';
import useApp from './hooks/useApp.js';
import { themeManager } from './managers/themeManager.js';
import useThemeDetector from './hooks/useThemeDetector.js';
import Preloader from './components/preloader/Preloader.jsx';
import ProjectRoutes from './routes/ProjectRoutes.jsx';
import { smoothTsManager } from './managers/smoothTsManager.js';

const App = observer(() => {
  const { localConfig } = useContext(Context);

  const { isThemeDetector } = useThemeDetector();

  const { isLoading, isAuth, isError } = useApp();

  if (isLoading) {
    return (
			<CSSTransition
				in={isLoading}
				timeout={300}
				classNames='preloader'
				unmountOnExit
			>
				<Preloader
					isLoading={isLoading}
					isThemeDetector={isThemeDetector}
					isError={isError}
				/>
			</CSSTransition>
    );
  }

  return (
		<div className='App'>
			<style>{smoothTsManager(localConfig).getStyle()}</style>

			<ScrollToTop />

			{localConfig.sky.value && (
				<Sky isLight={themeManager(localConfig).isLight()} />
			)}

			<div className='main_container'>
				<Header isAuth={isAuth} />
				<main className='content_container'>
					{isAuth && <Courses />}
					<ProjectRoutes isAuth={isAuth} />
					{isAuth && <Deadline />}
				</main>
			</div>
		</div>
  );
});

export default App;
