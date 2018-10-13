import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'
import dispatchProps from './redux/dispatchProps'
import { testFunc } from './redux/reducers/testReducer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <button onClick={() => dispatchProps(this, testFunc())}>CLICK</button>
        {this.props.test}
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
