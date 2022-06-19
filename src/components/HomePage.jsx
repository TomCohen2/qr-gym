import React from 'react'
import './styles/HomePage.css'

function HomePage(props) {
    return (
        <div className='home__container'><h1>{props.title}</h1></div>
    )
}

export default HomePage