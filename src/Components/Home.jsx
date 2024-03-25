import React from 'react'
import * as MyResume from '../static/Shivam_Goel-MERN-25_03_2024.pdf'

const Home = () => {
  return (

    <div className='HomePage-content m-auto w-page'>
      <div className="page-text p-left l-space p-top-Home">
        Hello<span id='Hand-btmj' role='img' aria-label='wave' aria-labelledby='wave'>✋</span>, My name is <br></br><span className="home-name">SHIVAM GOEL</span>
        <br></br> I am a passionate and creative MERN Stack developer,<br></br> from Delhi, India.
      </div>
      <div className="homepage-link p-left l-space">
        <a href={MyResume} className="Resume-button">RESUME</a>
      </div>
    </div>
  )
}

export default Home;