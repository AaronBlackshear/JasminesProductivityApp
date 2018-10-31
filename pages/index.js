import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Login from '../components/LoginForm'
import Calendar from '../components/Calendar'

class Index extends Component {
  state = {
    user: {}
  }

  componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'))
    user && this.setState({ user })
  }

  render () {
    const { user } = this.state
    const { auth } = this.props

    return (
      <Fragment>
        {auth.user &&
          (!user.authTokenOne && !auth.user.authTokenOne
            ? <Login />
            : <Calendar />)}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({ auth: state.userReducer })

export default connect(mapStateToProps)(Index)
