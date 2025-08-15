import React, { useState } from 'react'

const Register = () => {
 
  const [formData,setFormData] = useState({
    name: 'Gaurav',
    email: 'gaurav@example.com',
    password: 'password123',
    password2: 'password123'
  })

  var {name, email, password, password2} = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <>
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" action="create-profile.html">
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