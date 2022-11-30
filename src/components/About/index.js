// Write your JS code here

import {Component} from 'react'

import './index.css'

class About extends Component {
  render() {
    return (
      <div className="forHome">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          className="about-i"
          alt="about"
        />
        <h1 className="heading1">About</h1>
        <p className="aboutt">
          I love to create! I am a frontend web developer
        </p>
      </div>
    )
  }
}

export default About
