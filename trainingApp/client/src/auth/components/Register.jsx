import React, { useState } from 'react'

const Register = () => {
  //useState is a hook that allows you to add state to a functional component
  //useState returns an array with two elements: the current state and a function to update it
  //we can use array destructuring to assign the two elements to variables
  const [formData,setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  //formData is the state variable that holds the form data
  //setFormData is the function that updates the formData state variable
  const {name, email, password, password2} = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  //e.target.name is used to get the name of the input field that is being changed

  return (
    <>
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" action="create-profile.html">
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
    </>
  )
}

export default Register