import axios from 'axios'
const base_url = 'http://localhost:3001/api'

const initialState = {
  calendarBackgroundImages: {},
  events: [],
}

const ADD_CALENDAR_BACKGROUND = 'ADD_CALENDAR_BACKGROUND'
const ADD_EVENT = 'ADD_EVENT'

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CALENDAR_BACKGROUND:
      const { date, image } = action.payload
      return {
        ...state,
        calendarBackgroundImages: {
          ...state.calendarBackgroundImages,
          [date]: image
        }
      };

    case `${ADD_EVENT}_FULFILLED`:
      const { data } = action.payload;
      return { ...state, events: data };

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
  const localUser = JSON.parse(localStorage.getItem('user'))

  return {
    type: ADD_EVENT,
    payload: axios.post(`${base_url}/add_event`, {
      event,
      category,
      date,
      startTime,
      endTime,
    }, {
      headers: {
        email: localUser.email,
        password: localUser.password,
        authToken: localUser.authTokenOne,
      },
    }),
  }
}

export default userReducer
