import React from 'react'
import { connect } from 'react-redux'
import Calendar from '../components/Calendar'

class Index extends React.Component {
  render () {
    return (
      <div>
        <Calendar />
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state.userReducer })

export default connect(mapStateToProps)(Index)
