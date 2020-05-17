import { UPDATE_NUM_ENTRY } from '../actions/types';
import { merge } from 'lodash';
import { isCompositeComponent } from 'react-dom/test-utils';

const initialState = {
  value: {}
}

const fieldReducer = function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NUM_ENTRY:
      console.log("STATE:");
      console.log(state);
      console.log("ACTION:");
      console.log(action);
      let data = {}
      data[action.payload.id] = action.payload.value;
      console.log("data:");
      console.log(data);
      return {
        ...state,
        value: {
          ...state.value,
          ...data
        }
      }
    default:
      return state;
  }
}
export default fieldReducer;