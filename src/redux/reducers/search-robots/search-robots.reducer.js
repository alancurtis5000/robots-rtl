import {types} from './search-robots.types';

const initialStateSearch = {
    searchField: ''
  } 
  

export const searchRobotsReducer = (state=initialStateSearch, action={}) => {
    switch (action.type) {
      case types.CHANGE_SEARCHFIELD:
        return Object.assign({}, state, {searchField: action.payload})
      default:
        return state
    }
  }

  export default searchRobotsReducer;