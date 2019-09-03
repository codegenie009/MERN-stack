import { combineReducers } from 'redux';
import { reducer as main } from './MainRedux';

const reducers = combineReducers({
  main
});

export default reducers;
