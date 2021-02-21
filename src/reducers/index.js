import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';
import detailReducer from './comicDetailReducer';
import filterReducer from './filter';

export default combineReducers({
  comics: comicsReducer,
  filter: filterReducer,
  details: detailReducer,
});
