import React, { Component, Fragment } from 'react'

export default function Technologies() {
    return (
        <div id='techWrapper'>
            <p id='techHeader'>Technologies</p>
            <div id='techImages'>
                <a href="https://www.w3schools.com/Css/" target='_blank'><img src="/assets/icons/css.png" alt="image" className='techImage' /></a>
                <a href="https://www.w3schools.com/html/" target='_blank'><img src="/assets/icons/html.png" alt="image" className='techImage' /></a>
                <a href="https://www.javascript.com/" target='_blank'><img src="/assets/icons/javascript.png" alt="image" className='techImage' /></a>
                <a href="https://handlebarsjs.com/" target='_blank'><img src="/assets/icons/handlebars.png" alt="image" className='techImage' /></a>
                <a href="https://jestjs.io/" target='_blank'><img src="/assets/icons/jest.png" alt="image" className='techImage' /></a>
                <a href="https://nodejs.org/" target='_blank'><img src="/assets/icons/node.png" alt="image" className='techImage' /></a>
                <a href="https://www.postgresql.org/" target='_blank'><img src="/assets/icons/postgreSQL.png" alt="image" className='techImage' /></a>
                <a href="https://reactjs.org/" target='_blank'><img src="/assets/icons/react.png" alt="image" className='techImage' /></a>
                <a href="https://redux.js.org/" target='_blank'><img src="/assets/icons/redux.png" alt="image" className='techImage' /></a>
                <a href="https://facebook.github.io/react-native/" target='_blank'><img src="/assets/icons/react-native.png" alt="image" className='techImage' /></a>
            </div>
        </div>
    )
}


