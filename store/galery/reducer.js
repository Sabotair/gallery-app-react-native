import {CREATE_PHOTOS} from '../constants/actionType'

const defaultState = {
  photos: [],
}

export const galeryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_PHOTOS:
      return {...state, photos: action.payload}
    default:
      return state
  }
}
