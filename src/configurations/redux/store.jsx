import { applyMiddleware, createStore } from "redux";

import { createLogger } from 'redux-logger';
import rootReducer from "../../reducers/rootReducer"
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();
// const dev=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
  )
  
);

export default store;
