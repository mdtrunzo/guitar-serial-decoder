import React from 'react'
import { Link } from 'react-router-dom'
import Gibson from '../assets/gibson.jpg'
import Fender from '../assets/fender.jpg'

const Main = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h2>Guitar Date Decoder</h2>
        <h3>Please select your brand</h3>
      </div>

      <div className="main">
        <Link to="/gibson-decoder">
          <img
            src={Gibson}
            alt="Gibson Logo"
            style={{ cursor: 'pointer', width: '150px' }}
          />
        </Link>
        <Link to="/fender-decoder">
          <img
            src={Fender}
            alt="Fender Logo"
            style={{ cursor: 'pointer', width: '150px' }}
          />
        </Link>
      </div>
    </div>
  )
}

export default Main
