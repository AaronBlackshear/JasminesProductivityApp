import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/reducers/userReducer'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleUserInput = (state, input) => {
    this.setState({ [state]: input })
  }

  render () {
    const { username, password } = this.state
    const { dispatch } = this.props
    console.log(this.props)

    return (
      <div>
        <input
          onChange={e => this.handleUserInput('username', e.target.value)}
          placeholder='Username'
          value={username}
        />
        <input
          onChange={e => this.handleUserInput('password', e.target.value)}
          placeholder='Password'
          value={password}
        />
        <button onClick={() => dispatch(loginUser(username, password))}>Log In</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Login)
