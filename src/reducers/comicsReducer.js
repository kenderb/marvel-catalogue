import { FETCH_COMICS } from '../actions';

const comicsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMICS:

      return action.payload;

    default:

      return state;
  }
};

export default comicsReducer;
