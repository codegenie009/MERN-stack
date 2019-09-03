import { createReducer, createActions } from 'reduxsauce';
import get from 'lodash/get';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setLoading: ['loading'],
  setLoaded: ['loaded'],
  setUser: ['user']
});

export const MainTypes = Types;

export default Creators;

/* --------------------- Selectors ---------------- */
export const MainSelectors = {
  selectLoading: state => state.main.loading,
  selectLoaded: state => state.main.loaded,
  selectToken: state => state.main.token,
  selectUser: state => state.main.user,
  selectUsername: state => get(state, 'main.user.nickname', ''),
  selectEmail: state => get(state, 'main.user.email', ''),
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
