import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qm61pbd98-w" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <Link to="/products">
                <button className='home-button'>ENTER</button>
            </Link>
        </div>
    )
}

export default Home