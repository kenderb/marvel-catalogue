import { FETCH_COMIC_DETAIL } from '../actions/constans';

const detailReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMIC_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default detailReducer;
