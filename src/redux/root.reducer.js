import { combineReducers } from "redux";

import requestRobotsReducer from './reducers/request-robots/request-robots.reducer';
import searchRobotsReducer from './reducers/search-robots/search-robots.reducer';

const rootReducer = combineReducers({
  requestRobots: requestRobotsReducer,
  searchRobots: searchRobotsReducer,
});

export default rootReducer;
