import axios from 'axios'
const base_url = 'http://localhost:3001/api'

const initialState = {}

const LOGIN_USER = 'LOGIN_USER'

function userReducer (state = initialState, action) {
  switch (action.type) {
    case `${LOGIN_USER}`:
      return { ...state }
    default:
      return { ...state }
  }
}

export const testFunc = () => {
  return {
    type: LOGIN_USER
  }
}

export default userReducer
