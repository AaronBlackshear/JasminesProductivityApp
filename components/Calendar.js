import React, { Component } from 'react'
import { Calendar } from 'antd'
import moment from 'moment';
import EventsModal from './CalendarComponents/EventsModal'
import '../css/calendar.css'
import changeCalendarNames from '../utils/changeCalendarNames'

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

class CalendarComponent extends Component {
  state = {
    currentYear: null,
    currentMonth: null,
    currentDate: null,
    selectedDate: null,
    showModal: false,
  }

  componentDidMount() {
    changeCalendarNames()
    this.changeDate(moment(Date.now()));
  }

  changeDate = value => {
    this.setState({
      currentYear: value.year(),
      currentMonth: value.month() + 1,
      currentDate: value.date(),
      selectedDate: value.format("MM-DD-YYYY"),
    })
  }

  toggleModal = bool => {
    this.setState({ showModal: bool })
  }

  render() {
    const { currentMonth, currentYear, showModal, selectedDate } = this.state
    // console.log(showModal)
    return (
      <div>
        <h1>
          <span>{monthNames[currentMonth - 1]}</span>
          <span>{currentYear}</span>
        </h1>
        <EventsModal
          visible={showModal}
          toggleModal={this.toggleModal}
          selectedDate={selectedDate}
        />
        <Calendar
          onChange={e => this.changeDate(e)}
          onSelect={e => (this.changeDate(e), this.toggleModal(true))}
        />
      </div>
    )
  }
}

export default CalendarComponent
