import {SET_CONTACTDETAILS, SET_CONTACTS} from './actionTypes'

const initialState = {
  contacts: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACTS:
      const newState = {
        ...state,
        contacts: action.payload
      }
      return newState;
    default:
      return state
  }
}