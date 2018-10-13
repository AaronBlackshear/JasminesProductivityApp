import axios from 'axios'
const base_url = 'http://localhost:3001/api'

const initialState = {
  test: 'TEST'
}

const TEST_CREATOR = 'TEST_CREATOR'

function testReducer (state = initialState, action) {
  switch (action.type) {
    case `${TEST_CREATOR}`:
      return { ...state, test: action.payload.data }
    default:
      return { ...state }
  }
}

export const testFunc = () => {
  return {
    type: TEST_CREATOR,
    payload: axios.get(`${base_url}/test`)
  }
}

export default testReducer
