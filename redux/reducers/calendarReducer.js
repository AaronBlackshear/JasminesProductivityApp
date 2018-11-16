import axios from 'axios'
const base_url = 'http://localhost:3001/api'

const initialState = {
  calendarBackgroundImages: {}
}

const ADD_CALENDAR_BACKGROUND = 'ADD_CALENDAR_BACKGROUND'
const ADD_EVENT = 'ADD_EVENT'

function userReducer(state = initialState, action) {
  switch (action.type) {
    case `ADD_CALENDAR_BACKGROUND`:
      const { date, image } = action.payload
      return {
        ...state,
        calendarBackgroundImages: {
          ...state.calendarBackgroundImages,
          [date]: image
        }
      };

    case `ADD_EVENT`:
      return { ...state };

    default:
      return { ...state }
  }
}

export const addCalendarBackground = (date, image) => {
  return {
    type: ADD_CALENDAR_BACKGROUND,
    payload: { date, image },
  }
}

export const addEvent = (event, category, date, startTime, endTime) => {
  console.log(event, category, date, startTime, endTime);
  return {
    type: ADD_EVENT,
    payload: axios.post(`${base_url}/add_event`, {
      event,
      category,
      date,
      startTime,
      endTime,
    }),
  }
}

export default userReducer
