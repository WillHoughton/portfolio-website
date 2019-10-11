import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

// Component Imports
import Main from './Main'
import Technologies from './Technologies'
import Projects from './Projects'
import Blog from './Blog'


export default function Render() {
  return (
    <Fragment>
      <Main />
      <Technologies />
      <Projects />
      <Blog />
    </Fragment>
  )
}