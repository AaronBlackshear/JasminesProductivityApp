import React, { Component } from 'react'
import { Calendar } from 'antd'
import '../css/calendar.css'
import changeCalendarNames from '../utils/changeCalendarNames';
import getMonthName from '../utils/getMonthName';

class CalendarComponent extends Component {
  state = {
    currentYear: null,
    currentMonth: null
  };

  componentDidMount() {
    changeCalendarNames();
    this.changeMonthName();
    document.getElementsByClassName('ant-radio-group-outline')[0].style.display = 'none'
  }

  changeMonthName = () => {
    this.setState({
        currentMonth: getMonthName().month,
        currentYear: getMonthName().year
      });
  }

  render () {
    const { currentMonth, currentYear } = this.state;

    return (
      <div>
        { currentMonth }
        { currentYear }
        <Calendar onChange={() => setTimeout(() => this.changeMonthName(), 0)} />
      </div>
    )
  }
}

export default CalendarComponent
