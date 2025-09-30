import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({appName}) => {
  return (
    <div>
      <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> {appName}</a>
      </h1>
      <ul>
        <li><Link to="/dashboard">Developers</Link></li>
        <li><Link to="/auth/register">Register</Link></li>
        <li><Link to="/auth/login">Login</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Header