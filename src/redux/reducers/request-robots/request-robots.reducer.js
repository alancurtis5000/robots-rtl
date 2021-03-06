import {types} from './request-robots.types';

const initialStateRobots = {
  robots: [],
  isPending: true
}

export const requestRobotsReducer = (state=initialStateRobots, action={}) => {
  switch (action.type) {
    case types.REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case types.REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false})
    case types.REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

export default requestRobotsReducer