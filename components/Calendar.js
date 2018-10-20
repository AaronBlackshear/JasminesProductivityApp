import React, { Component } from 'react'
import { Calendar } from 'antd'
import '../css/calendar.css'
import changeCalendarNames from '../utils/changeCalendarNames';

class CalendarComponent extends Component {
  componentDidMount() {
    changeCalendarNames();
  }

  render () {
    return (
      <div>
        <Calendar />
      </div>
    )
  }
}

export default CalendarComponent
