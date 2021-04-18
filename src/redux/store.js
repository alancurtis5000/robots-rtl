import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';

import rootReducer from "./root-reducer";

const middlewares = [thunkMiddleware];

// add functionality based off env /development/ test/ production
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));


