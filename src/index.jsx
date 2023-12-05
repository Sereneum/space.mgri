import ReactDOM from 'react-dom/client';
import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import UserStore from './store/userStore.js';
import CourseStore from './store/courseStore.js';
import LocalConfig from './store/localConfig.js';

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Context.Provider value={{
          user: new UserStore(),
          courseData: new CourseStore(),
          localConfig: new LocalConfig(),
        }}>
            <App/>
        </Context.Provider>
    </BrowserRouter>,
);
