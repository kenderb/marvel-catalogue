import {
  FETCH_COMICS, LOADING_COMICS, ERROR_COMICS, FETCH_COMIC_DETAIL,
  FILTER_COMICS,
} from './constans';

export const fetchComicsSuccess = comics => ({
  type: FETCH_COMICS,
  payload: comics,
});

export const fetchComicsLoading = () => ({
  type: LOADING_COMICS,
});

export const fetchComicsError = () => ({
  type: ERROR_COMICS,
});

export const fetchComicsDetailsSuccess = comic => ({
  type: FETCH_COMIC_DETAIL,
  payload: comic,
});

export const filterByCreatorSuccess = filter => ({
  type: FILTER_COMICS,
  payload: filter,
});
