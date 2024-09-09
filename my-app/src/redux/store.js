import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { todoReducer } from './reducers/todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));