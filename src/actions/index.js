import developerMarvel, { QUERY } from '../apis/developerMarvel';
import {
  fetchComicsSuccess, fetchComicsLoading,
  fetchComicsError, fetchComicsDetailsSuccess,
  filterByCreatorSuccess,
} from './actionTypes';

export const fetchComics = (title = 'iron man') => async dispatch => {
  try {
    dispatch(fetchComicsLoading());
    const response = await developerMarvel.get(`/comics?${title ? `title=${title}&` : ''}limit=80&${QUERY}`, {
      orderBy: 'modified',
    });
    dispatch(fetchComicsSuccess(response.data.data.results));
    return true;
  } catch (error) {
    dispatch(fetchComicsError());
    return false;
  }
};

export const fetchComicDetail = id => async dispatch => {
  try {
    const response = await developerMarvel.get(`/comics/${id}?${QUERY}`);
    dispatch(fetchComicsDetailsSuccess(response.data.data.results[0]));
    return true;
  } catch (error) {
    return error.message;
  }
};

export const filterByCreator = filter => (filterByCreatorSuccess(filter));
