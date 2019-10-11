import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'


export default function Blog() {
    return (
        <div id='proWrapper'>
            <p id='proHeader'>Blog</p>
            <div id='projects'>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/blog.jpeg' />
                    <p className='projectName'>Blog 1</p>
                    <p className='projectDesc'>Description</p>
                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/blog.jpeg' />
                    <p className='projectName'>Blog 2</p>
                    <p className='projectDesc'>Description</p>
                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/blog.jpeg' />
                    <p className='projectName'>Blog 3</p>
                    <p className='projectDesc'>Description</p>
                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/blog.jpeg' />
                    <p className='projectName'>Blog 4</p>
                    <p className='projectDesc'>Description</p>
                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/blog.jpeg' />
                    <p className='projectName'>Blog 5</p>
                    <p className='projectDesc'>Description</p>
                </div>
                <div className='project'>
                    <img className='projectImage' src='/assets/images/blog.jpeg' />
                    <p className='projectName'>See More....</p>
                    <p className='projectDesc'>Description</p>
                </div>
            </div>
        </div>
    )
}
