import React, { Component, Fragment } from 'react'


export default function Main() {
  return (
    <div id='mainPage'>
      <div id='mainWrapper'>
        <div id='left'>
          <img id='will' src="/assets/images/will.png" alt='will'></img>
          <p id='name'>William Houghton</p>
          <p id='title'>Full Stack Web Developer</p>
          <p id='location'>Wellington, New Zealand</p>
        </div>

        {/* <div id='empty'></div> */}

        <div id='right'>
          <p id='mainHeader'>Hello!</p>
          <p id='mainSubHeader'>This is my portfolio website</p>
          <p id='mainIntro'>My name is Will Houghton, I'm 19 years old and am beginning my career into the development world. I recently graduated from Enspiral Dev Academy (Wellington) and learned full stack Javascript. </p>
        </div>
      </div>
    </div>
  )
}
