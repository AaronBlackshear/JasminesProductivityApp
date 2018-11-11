import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Login from '../components/LoginForm'
import Calendar from '../components/Calendar'
import LoadingScreen from '../components/LoadingScreen';

class Index extends Component {
  state = {
    user: {},
    loggedIn: null,
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    user
      ? this.setState({ user, loggedIn: false })
      : this.setState({ loggedIn: false });
  }

  render() {
    const { user, loggedIn } = this.state
    const { auth } = this.props

    return (
      <Fragment>
        {
          loggedIn === null
            ? <LoadingScreen />
            : (
              auth.user &&
                !user.authTokenOne && !auth.user.authTokenOne
                  ? <Login />
                  : <Calendar />
            )
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({ auth: state.userReducer })

export default connect(mapStateToProps)(Index)
