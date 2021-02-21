import developerMarvel, { QUERY } from '../apis/developerMarvel';

export const FETCH_COMICS = 'FETCH_COMICS';
export const FETCH_COMIC_DETAIL = 'FETCH_COMIC_DETAIL';
export const FILTER_COMICS = 'FILTER_COMICS';

export const fetchComics = (title = 'iron man') => async dispatch => {
  try {
    const response = await developerMarvel.get(`/comics?${title ? `title=${title}&` : ''}limit=80&${QUERY}`, {
      orderBy: 'modified',
    });
    dispatch({ type: FETCH_COMICS, payload: response.data.data.results });
    return true;
  } catch (error) {
    return error.message;
  }
};

export const fetchComicDetail = id => async dispatch => {
  try {
    const response = await developerMarvel.get(`/comics/${id}?${QUERY}`);
    dispatch({ type: FETCH_COMIC_DETAIL, payload: response.data.data.results[0] });
    return true;
  } catch (error) {
    return error.message;
  }
};

export const filterByCreator = filter => ({
  type: FILTER_COMICS,
  payload: filter,
});
