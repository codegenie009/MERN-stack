import { combineReducers } from 'redux';
import { reducer as main } from './MainRedux';
import { reducer as currentSpace } from './SpaceRedux';

const reducers = combineReducers({
  main,
  currentSpace
});

export default reducers;
