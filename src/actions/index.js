import developerMarvel, { QUERY } from '../apis/developerMarvel';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';

export const fetchCharacters = () => async dispatch => {
  try {
    const response = await developerMarvel.get(`/characters?${QUERY}`, {
      orderBy: 'name',
    });
    dispatch({ type: FETCH_CHARACTERS, payload: response.data.data.results });
    return true;
  } catch (error) {
    return error.message;
  }
};
