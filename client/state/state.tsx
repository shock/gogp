import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState } from './state.types';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

export const store = createStore( rootReducer, initialState, applyMiddleware(...middleware));
