import types from './search-robots.types'
export const setSearchField = (text) => ({ type: types.CHANGE_SEARCHFIELD, payload: text })