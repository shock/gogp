import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState } from './state.types';
import rootReducer from './reducers';
import { UPDATE_NUM_ENTRY } from './actions/action_types';

const initialState = {};

const middleware = [thunk];

export const store = createStore( rootReducer, initialState, applyMiddleware(...middleware));

const marchCap = 1000;
const payload = {
  id: 'march_cap',
  value: marchCap
}

setTimeout(() => {
  store.dispatch({
    type: UPDATE_NUM_ENTRY,
    payload: payload
  });
}, 500);
