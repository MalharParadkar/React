import React from 'react'
import './homepage.css'
import images from '../../assets/images/Malhar__Paradkar.jpg'

const Homepage = () => {
  return (
    <div>
        <div id='homepage'>
            <div id='homepage-text'>
                <h1 id='homepage-title'>Hi, I'm Malhar Paradkar</h1>
                <h2 id='homepage-subtitle'>I'm a Full Stack Developer</h2>
                <br />
                <p id='homepage-para'>I’m Malhar Paradkar, a final year Electronics and Telecommunication Engineering student with a passion for full stack development. I thrive on creating innovative solutions that bridge the gap between hardware and software. My journey in engineering has equipped me with a solid foundation in technical skills and a keen eye for design, enabling me to develop dynamic and user-friendly applications. Explore my work to see how I blend creativity and technology to bring ideas to life!</p>
                <br />
                <button id='homepage-btn'>See my projects</button>
            </div>
            <div id='homepage-img'>
                <img src={images} alt="Malhar-img" />
            </div>
        </div>
    </div>
  )
}

export default Homepage