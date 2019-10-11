import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

// Component Imports
import Main from './Main'
import Technologies from './Technologies'


export default function Render() {
  return (
    <Fragment>
      <Main />
      <Technologies />
    </Fragment>
  )
}
