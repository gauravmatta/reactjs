import React, { useState } from 'react'
import { registerUser } from '../services/auth.service';

const Register = () => {
  //useState is a hook that allows you to add state to a functional component
  //useState returns an array with two elements: the current state and a function to update it
  //we can use array destructuring to assign the two elements to variables
  const [formData,setFormData] = useState({
    name: 'Gaurav',
    email: 'gaurav@example.com',
    password: 'password123',
    password2: 'password123'
  })

  //formData is the state variable that holds the form data
  //setFormData is the function that updates the formData state variable
  const {name, email, password, password2} = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log('Form submitted successfully', formData);
      // Here you would typically call the registerUser function from auth.service.js
     const result = registerUser({ 
      name:formData.name,
      email:formData.email,
      password:formData.password
     })
    }
  }

  return (
    <>
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name}
           onChange={onChange} 
           required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={onChange} required />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
    </>
  )
}

export default Register