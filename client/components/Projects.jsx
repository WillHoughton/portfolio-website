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
                    <img className='projectImage' src='/assets/images/code.jpeg' />
                    <p className='projectName'>Project 1</p>
                    <p className='projectDesc'>Description</p>
                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/code.jpeg' />
                    <p className='projectName'>Project 2</p>
                    <p className='projectDesc'>Description</p>

                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/code.jpeg' />
                    <p className='projectName'>Project 3</p>
                    <p className='projectDesc'>Description</p>

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
