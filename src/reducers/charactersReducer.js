import { FETCH_CHARACTERS } from '../actions';

const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:

      return [...state, action.payload];

    default:

      return state;
  }
};

export default charactersReducer;