import { combineReducers } from 'redux';
import standingsReducer from './standings';
import filterReducer from './filter';

const rootReducer = combineReducers({
  standings: standingsReducer,
  filter: filterReducer,
});

export default rootReducer;
