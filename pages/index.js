import React from 'react'
import { connect } from 'react-redux'
import { testFunc } from '../redux/reducers/testReducer'

class Index extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <h1>HOME PAGE</h1>
        <button onClick={() => this.props.testFunc()}>Click Me!</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { testFunc })(Index)
