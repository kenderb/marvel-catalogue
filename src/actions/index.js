import developerMarvel, { QUERY } from '../apis/developerMarvel';

export const FETCH_COMICS = 'FETCH_COMICS';

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
