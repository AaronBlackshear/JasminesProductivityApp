import React, { Component } from 'react'
import { Calendar } from 'antd'
import '../css/calendar.css'

class CalendarComponent extends Component {
  componentDidMount () {
    let elems = document.getElementsByClassName('ant-fullcalendar-date')
    let iterationCount = elems.length

    for (let i = 0; i < iterationCount; i++) {
      elems[i].addEventListener('click', () => {
        this.addImageBackground(elems[i])
      })
    }
  }

  addImageBackground = (elem) => {
    elem.classList.add('calendar-bg')
    console.log(elem.classList)
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
