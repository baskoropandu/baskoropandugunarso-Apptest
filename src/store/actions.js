import { SET_CONTACTS, SET_CONTACT, SET_CONTACTDETAILS } from "./actionTypes"

const baseUrl = `https://simple-contact-crud.herokuapp.com`

export function setContacts(params) {
  const action = {
    type: SET_CONTACTS,
    payload: params
  }
  return action
}

export function setContact(params) {
  const action = {
    type: SET_CONTACTDETAILS,
    payload: params
  }
  return action
}

export function fetchContacts(_) {
  return async function (dispatch, getState) {
    fetch(`${baseUrl}/contact`)
      .then(response => response.json())
      .then(({data}) => {
        dispatch(setContacts(data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function createContact(data) {
  fetch(`${baseUrl}/contact`, {
    method: 'POST',
    body: data
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err)
    })
}

export function fetchContactDetails(id) {
  return async function (dispatch, getState) {
    fetch(`${baseUrl}/contact/${id}`)
      .then(response => response.json())
      .then(({data}) => {
        dispatch(setContact(data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function deleteContact(id) {
  return async function (dispatch, getState) {
    fetch(`${baseUrl}/contact/${id}`, {method: "DELETE"})
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        dispatch(fetchContacts())
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function updateContact(data, id) {
  fetch(`${baseUrl}/contact/${id}`, {
    method: 'put',
    body: data
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err)
    })
}

