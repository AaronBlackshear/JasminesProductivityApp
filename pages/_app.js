import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Index from '../components/index';
import Page from '../components/Page';
import '../css/index.css'
import '../css/main.css'
import '../css/override.css'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <Page>
            <Index>
              <Component {...pageProps} />
            </Index>
          </Page>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
