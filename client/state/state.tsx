/*
  External Imports
*/

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

/*
  Internal Imports
*/

import { ApplicationState } from './state.types';
import rootReducer from './reducers';
import { UPDATE_NUM_ENTRY } from './actions/action_types';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);

const marchCap = 1000;
const payloads = [
  {
    id: 'march_cap',
    value: marchCap
  },
  {
    id: 'Infantry',
    value: marchCap/2
  },
  {
    id: 'Distance',
    value: marchCap/2
  },
];

setTimeout(() => {
  payloads.map( (payload) => {
    store.dispatch({
      type: UPDATE_NUM_ENTRY,
      payload: payload
    });
    return payload;
  });
}, 500);
