import { FETCH_TOP, FETCH_RAND } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_TOP:
    return {...state, all: action.payload.data.items};
  case FETCH_RAND:
    return {...state, all: action.payload.data};
  default:
    return state;
  }
}