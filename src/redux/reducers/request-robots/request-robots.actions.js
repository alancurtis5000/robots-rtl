import { apiCall } from './api/api'
import types from './request-robots.types';

export const requestRobots = (dispatch) => {
    dispatch({ type: types.REQUEST_ROBOTS_PENDING })
    apiCall('https://jsonplaceholder.typicode.com/users')
      .then(data => dispatch({ type: types.REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: types.REQUEST_ROBOTS_FAILED, payload: error }))
  }