// Write your JS code here

import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="forHome">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          className="home-i"
          alt="home"
        />
        <h1 className="heading3">Home</h1>
      </div>
    )
  }
}

export default Home
