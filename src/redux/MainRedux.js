import { createReducer, createActions } from 'reduxsauce';
import Cookies from 'js-cookie';
import get from 'lodash/get';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setLoading: ['loading'],
  setLoaded: ['loaded'],
  setUser: ['user']
});

export const MainTypes = Types;

Creators.setLogin = (token, user) => {
  return dispatch => {
    Cookies.set('memorial-token', token);
    return Promise.resolve(dispatch(Creators.setUser(user)));
  };
};

Creators.setLogout = () => {
  return dispatch => {
    Cookies.remove('memorial-token');
    return Promise.resolve(dispatch(Creators.setUser(null)));
  };
};

export default Creators;

/* --------------------- Selectors ---------------- */
export const MainSelectors = {
  selectLoading: state => state.main.loading,
  selectLoaded: state => state.main.loaded,
  selectToken: state => state.main.token,
  selectUser: state => state.main.user,
  selectPermissions: state => get(state, 'main.user.permissions', []),
  selectSpaces: state =>
    get(state, 'main.user.permissions', [])
      .filter(p => p.space)
      .map(p => p.space),
  selectEmail: state => get(state, 'main.user.email', ''),
  selectRole: state => get(state, 'main.user.role', ''),
  selectLoggedIn: state => !!get(state, 'main.user'),
  selectVerified: state => get(state, 'main.user.verified', false)
};

/* --------------------- Initial State ----------------- */
export const INITIAL_STATE = {
  loading: false,
  loaded: false,
  user: null
};

/* ------------------- Reducers --------------------- */
export const setLoading = (state, { loading }) => ({
  ...state,
  loading
});

export const setLoaded = (state, { loaded }) => ({
  ...state,
  loaded
});

export const setUser = (state, { user }) => ({
  ...state,
  user
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
  [Types.SET_LOADED]: setLoaded,
  [Types.SET_USER]: setUser
});
