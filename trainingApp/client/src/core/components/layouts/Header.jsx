import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../auth/redux/authAction';

const Header = ({appName}) => {
  const dispatch = useDispatch();
   const { isAuthenticated, user } = useSelector((state) => state.authReducer)
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <button
          type="button"
          className="btn btn-link text-light"
          onClick={() => dispatch(logout())}
          style={{ textDecoration: "none" }}
          aria-label="Logout"
        >
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">
            Logout{user?.name ? ` (${user.name})` : ""}
          </span>
        </button>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/auth/register">Register</Link>
      </li>
      <li>
        <Link to="/auth/login">Login</Link>
      </li>
    </ul>
  );


  return (
    <div>
      <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> {appName}</a>
      </h1>
      {isAuthenticated ? authLinks : guestLinks}
    </nav>
    </div>
  )
}

export default Header