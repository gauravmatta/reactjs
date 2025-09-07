import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Simple functional component that displays a welcome message for the user dashboard

const Dashboard = () => {

// Get User Data from AuthReducer using useSelector hook
// Render the user name in the welcome message 
const dispatch = useDispatch();
const { user } = useSelector((state) => state.authReducer);
// const user = useSelector((state) => state.auth.user);
  return (
    <>
      {" "}
     <section className="container">
      <h1 className="large text-primary">
        Dashboard
      </h1>
      <p className="lead"><i className="fas fa-user"></i> Welcome {user.name}</p>
      </section>
    </>
  );
};

export default Dashboard