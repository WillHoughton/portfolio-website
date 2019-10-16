import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'


export default function Projects() {
    return (
        <div id='proWrapper'>
            <p id='proHeader'>Projects</p>
            <div id='projects'>
                <div className='project'>
                    <img className='projectImage' src='/assets/projects/code-a-rocket.png' />
                    <p className='Code a Rocket'>Code a Rocket</p>
                    <p className='projectDesc'>A rocket building game. <br />Technologies used: <br />React.js, Redux.js, HTML, CSS</p>
                    <a href='http://code-a-rocket.herokuapp.com' target='_blank'><button>View Live</button></a>
                    <a href='https://github.com/WillHoughton/Team-Rocket' target='_blank'><button>Fork</button></a>
                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/projects/portfolio-web.png' />
                    <p className='projectName'>Portfolio Website</p>
                    <p className='projectDesc'>Personal website where I share content produced.</p>
                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/projects/irritation.jpeg' />
                    <p className='projectName'>Irritation Website</p>
                    <p className='projectDesc'>An annoying website built to irritate</p>

                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/code.jpeg' />
                    <p className='projectName'>Project 4</p>
                    <p className='projectDesc'>Description</p>

                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/code.jpeg' />
                    <p className='projectName'>Project 5</p>
                    <p className='projectDesc'>Description</p>

                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/code.jpeg' />
                    <p className='projectName'>See More....</p>
                    <p className='projectDesc'>Description</p>
                </div>
            </div>
        </div>
    )
}
