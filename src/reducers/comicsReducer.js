import { FETCH_COMICS, LOADING_COMICS, ERROR_COMICS } from '../actions';

const initialState = {
  data: [],
  error: false,
  loading: true,
};

const comicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMICS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case LOADING_COMICS:
      return {
        ...state,
        loading: true,
      };

    case ERROR_COMICS:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default comicsReducer;
