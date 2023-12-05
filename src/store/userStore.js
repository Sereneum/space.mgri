import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._userData = {};
    this._minorUserData = {};
    this._config = {};
    this._calendar = {};
    this._weekData = {};
    this._weekID = '';
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUserData(userData) {
    this._userData = JSON.parse(JSON.stringify(userData));
  }

  setMinorUserData(minorUserData) {
    this._minorUserData = JSON.parse(JSON.stringify(minorUserData));
  }

  setConfig(config) {
    this._config = config;
  }

  setCalendar(calendar) {
    this._calendar = JSON.parse(JSON.stringify(calendar));
  }

  setWeekData(weekData) {
    this._weekData = JSON.parse(JSON.stringify(weekData));
  }

  setWeekID(weekID) {
    this._weekID = weekID;
  }

  get isAuth() {
    return this._isAuth;
  }

  get userData() {
    return JSON.parse(JSON.stringify(this._userData));
  }

  get minorUserData() {
    return JSON.parse(JSON.stringify(this._minorUserData));
  }

  get config() {
    return this._config;
  }

  get calendar() {
    return JSON.parse(JSON.stringify(this._calendar));
  }

  get weekData() {
    return JSON.parse(JSON.stringify(this._weekData));
  }

  get weekID() {
    return this._weekID;
  }
}
