import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { Layout } from 'antd'
import Sidebar from '../components/Sidebar'
import '../css/index.css'

const { Content } = Layout

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>

          {/* CONTENT + SIDEBAR LAYOUT */}
          <Layout>
            <Sidebar />

            {/* MAIN CONTENT */}
            <Content>
              <Component {...pageProps} />
            </Content>

          </Layout>

        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
