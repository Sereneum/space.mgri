import { createContext, useContext } from 'react';
import CourseStore from './courseStore.js';
import LocalConfig from './localConfig.js';
import UserStore from './userStore.js';

const store = {
  CourseStore,
  LocalConfig,
  UserStore,
};

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);

export default store;