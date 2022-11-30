// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="navv">
        <div className="space-b">
          <div className="img-name">
            <img
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
            />
            <p className="para">Wave</p>
          </div>
          <div className="links">
            <Link to="/" className="para2">
              Home
            </Link>
            <Link to="/about" className="para2">
              About
            </Link>
            <Link to="/contact" className="para2">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
