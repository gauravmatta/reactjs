import React, { useState } from 'react'
import { registerAction } from '../redux/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  // useDispatch is a hook that gives you access to the dispatch function from the Redux store
  // you can use it to dispatch actions as needed
  const dispatch = useDispatch();
  
  // useSelector is a hook that allows you to extract data from the Redux store state
  // useSelector takes a function as an argument that receives the entire store state and returns the part of the state you want
   const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  // navigation hook to programmatically navigate to different routes
  const navigate = useNavigate();  

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

    // Dispatch the registerAction with formData
    dispatch(registerAction({name,email,password}));

    // useReducer is a hook that allows you to manage local component state
    // const [state, dispatch] = useReducer(reducer, initialState);

    // console.log(result);
    }
  }

  if(isAuthenticated){
    console.log('User is authenticated');
    navigate('/dashboard/');
  } else {
    console.log('User is not authenticated');
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
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={onChange} />
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