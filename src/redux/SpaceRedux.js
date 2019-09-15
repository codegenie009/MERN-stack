import { createReducer, createActions } from 'reduxsauce';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setSpace: ['space']
});

export const SpaceTypes = Types;

export default Creators;

/* --------------------- Selectors ---------------- */
export const SpaceSelectors = {
  selectCurrentSpace: state => state.currentSpace.space
};

/* --------------------- Initial State ----------------- */
export const INITIAL_STATE = {
  space: null
};

/* ------------------- Reducers --------------------- */

export const setSpace = (state, { space }) => ({
  ...state,
  space
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SPACE]: setSpace
});
