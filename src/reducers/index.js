import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';

export default combineReducers({
  comics: comicsReducer,
});
