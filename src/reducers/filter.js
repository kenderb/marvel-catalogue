import { FILTER_COMICS } from '../actions/constans';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case FILTER_COMICS:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
