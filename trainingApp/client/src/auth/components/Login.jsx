import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/authAction';
import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../services/auth.service';

const Login = () => {

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Login form submitted', formData);
    try {
      dispatch(loginAction({ email, password }));
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  if (isAuthenticated) {
    console.log('User is authenticated');
    navigate('/dashboard/');
  } else {
    console.log('User is not authenticated');
  }

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <a href="register.html">Sign Up</a>
        </p>
      </section>
    </>
  )
}

export default Login