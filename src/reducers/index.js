import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';
import filterReducer from './filter';

export default combineReducers({
  comics: comicsReducer,
  filter: filterReducer,
});
