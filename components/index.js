import React, { Component, Fragment } from 'react'
import { Layout } from 'antd'
import Sidebar from '../components/Sidebar'
import { connect } from 'react-redux'

const { Content } = Layout

class Index extends Component {
  state = {
    user: {}
  }

  componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'))
    user && this.setState({ user })
  }

  render () {
    const { auth } = this.props
    const { user } = this.state

    return (
      <Fragment>
        {/* CONTENT + SIDEBAR LAYOUT */}
        <Layout>
          {/* {auth.user.authTokenOne && <Sidebar />} */}
          {auth.user &&
            ((user.authTokenOne || auth.user.authTokenOne) && <Sidebar />)}

          {/* MAIN CONTENT */}
          <Content>
            {this.props.children}
          </Content>

        </Layout>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.userReducer,
  dispatch: state.dispatch
})

export default connect(mapStateToProps)(Index)
