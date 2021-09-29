import { SET_CONTACTS } from "./actionTypes"
const baseUrl = `https://simple-contact-crud.herokuapp.com`

export function setContacts(params) {
  const action = {
    type: SET_CONTACTS,
    payload: params
  }
  return action
}

export function fetchContacts(params) {
  return function (dispatch, getState) {
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
  let formData = new FormData()
  formData.append('firstName', data.firstName)
  formData.append('lastName', data.lastName)
  formData.append('age', data.age)
  if(data.photo) {
    formData.append('photo', data.photo)
  }
  return () => {
    return fetch(`${baseUrl}/contact`, {
      method: 'POST',
      body: formData
    })
  }
}

export function fetchContactDetails(id) {
  return () => fetch(`${baseUrl}/contact/${id}`)
}

export function deleteContact(id) {
  return () => fetch(`${baseUrl}/contact/${id}`, {method: "DELETE"})
}

export function updateContact(data, id) {
  let formData = new FormData()
  formData.append('firstName', data.firstName)
  formData.append('lastName', data.lastName)
  formData.append('age', data.age)
  if(data.photo) {
    formData.append('photo', data.photo)
  }
  return () => {
    return fetch(`${baseUrl}/contact/${id}`, {
      method: 'PUT',
      body: formData
    })
  }
}

