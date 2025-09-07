import React, { useState } from 'react'
// import { loginUser } from '../services/auth.service';

const Login = () => {

const [formData, setFormData] = useState({
  email: '',
  password: ''
});

const { email, password } = formData;

const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

// const onSubmit = async (e) => {
//   e.preventDefault();
//   console.log('Login form submitted', formData);
//   try {
//     const user = await loginUser({ email, password });
//     console.log('Login successful', user);
//   } catch (error) {
//     console.error('Login failed', error);
//   }
// };

  return (
    <>
       <section className="container">
      <div className="alert alert-danger">
        Invalid credentials
      </div>
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