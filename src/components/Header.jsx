import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link to="/">
        <h1 className="text-warning mt-3 mb-4 display-2">CoinSpace</h1>
      </Link>
      <p className="text-outline shadowed text-white text-center font-weight-light h4 mb-4">Your personalized crypto data center</p>
    </div>
  )
}

export default Header