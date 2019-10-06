import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Render from './Render'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Render />
          <p>Hello world</p>
          {/* TEMP DISABLED */}
          {/* Means that if showLanding is true we display the portal page, if not we display webapp */}
          {/* { this.props.showLanding ? <LandingPage /> : <Main />} */}
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    LandingPage: state.isNewUser
  }
}

export default connect(mapStateToProps)(App)
