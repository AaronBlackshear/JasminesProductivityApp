import axios from 'axios'
const base_url = 'http://localhost:3001/api'

const initialState = {
  calendarBackgroundImages: {}
}

const ADD_CALENDAR_BACKGROUND = 'ADD_CALENDAR_BACKGROUND'

function userReducer (state = initialState, action) {
  switch (action.type) {
    case `${ADD_CALENDAR_BACKGROUND}`:
      const { date, image } = action.payload
      return {
        ...state,
        calendarBackgroundImages: {
          ...state.calendarBackgroundImages,
          [date]: image
        }
      }
    default:
      return { ...state }
  }
}

export const addCalendarBackground = (date, image) => {
  return {
    type: ADD_CALENDAR_BACKGROUND,
    payload: { date, image }
  }
}

export default userReducer
