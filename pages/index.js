import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Calendar from '../components/Calendar'

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Calendar />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({ auth: state.userReducer })

export default connect(mapStateToProps)(Index)
