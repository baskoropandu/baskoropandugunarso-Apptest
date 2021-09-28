import {SET_CONTACTDETAILS, SET_CONTACTS} from './actionTypes'

const initialState = {
  contacts: [],
  contactDetails: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACTS:
      const newState = {
        ...state,
        contacts: action.payload
      }
      return newState;
    case SET_CONTACTDETAILS:
      const newState2 = {
        ...state,
        contactDetails: action.payload
      }
      return newState2;
    default:
      return state
  }
}