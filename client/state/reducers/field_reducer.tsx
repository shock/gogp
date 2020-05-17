import { UPDATE_FIELD } from '../actions/types';

const initialState = {
  value: 'initVal'
}

const fieldReducer = function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}
export default fieldReducer;