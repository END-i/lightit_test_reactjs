import React, { useContext, useReducer, Dispatch } from 'react';
import axios from 'axios';

import type { Favorites, Notifications } from 'types';

const USER = localStorage.getItem('username') ?? '';
const TOKEN = localStorage.getItem('token') ?? '';

const INITIAL_STATE = {
  username: '' || USER,
  token: '' || TOKEN,
  favorites: null,
  notifications: [],
};

export enum ActionTypes {
  setToken = 'SET_TOKEN',
  setUserName = 'SET_USERNAME',
  logout = 'LOGOUT',
  setFavorites = 'SET_FAVORITES',
  setNotifications = 'SET_NOTIFICATIONS',
}
interface InitialState {
  username: string;
  token: string;
  favorites: Favorites | null;
  notifications: any;
}
interface SetTokenAction {
  type: ActionTypes.setToken;
  payload: string;
}
interface SetUsernameAction {
  type: ActionTypes.setUserName;
  payload: string;
}
interface LogoutAction {
  type: ActionTypes.logout;
}
interface SetProductsAction {
  type: ActionTypes.setFavorites;
  payload: Favorites;
}
interface SetNotifications {
  type: ActionTypes.setNotifications;
  payload: Notifications;
}
type Actions = SetTokenAction | SetUsernameAction | LogoutAction | SetProductsAction | SetNotifications;

function reducer(state: InitialState, action: Actions) {
  const today = new Date();

  switch (action.type) {
    case ActionTypes.setToken:
      axios.defaults.headers.common['Authorization'] = `Token ${action.payload}`;
      localStorage.setItem('token', action.payload);
      localStorage.setItem('tokenTime', `${today.setHours(today.getHours() + 1)}`);

      return {
        ...state,
        token: action.payload,
      };
    case ActionTypes.setUserName:
      localStorage.setItem('username', action.payload);

      return {
        ...state,
        username: action.payload,
      };
    case ActionTypes.setFavorites:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.logout:
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('profile');
      localStorage.removeItem('tokenTime');
      delete axios.defaults.headers.common['Authorization'];

      return {
        ...state,
        username: '',
        token: '',
        products: null,
      };
    case ActionTypes.setNotifications:
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
      };
    default:
      console.error(`Unhandled action type: ${action}`);
      return state;
  }
}

const Context = React.createContext<{
  store: InitialState;
  dispatch: Dispatch<Actions>;
}>({
  store: INITIAL_STATE,
  dispatch: () => null,
});

interface Props {
  children: React.ReactNode;
}
function Provider({ children }: Props) {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);
  return <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>;
}

function useStore() {
  const { store } = useContext(Context);
  return store;
}

function useDispatch() {
  const { dispatch } = useContext(Context);
  return dispatch;
}

export { Provider, useDispatch, useStore };
