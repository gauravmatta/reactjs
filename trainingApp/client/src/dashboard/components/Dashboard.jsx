import React, { use, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserProfileAction } from '../../profile/redux/profileAction';
import { Link } from 'react-router-dom';
import DashboardAction from './DashboardAction';
import EducationDetails from './EducationDetails';
import ExperienceDetails from './ExperienceDetails';

// Simple functional component that displays a welcome message for the user dashboard

const Dashboard = () => {

  // Get User Data from AuthReducer using useSelector hook
  // Render the user name in the welcome message 
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const { currentProfile } = useSelector((state) => state.profileReducer);
  useEffect(() => {
    dispatch(getCurrentUserProfileAction());
  }, [dispatch]);
  const displayProfile = useMemo(() => {
    if (currentProfile) {
      return (
        <>
          <DashboardAction />
        </>
      );
    } else {
      return (
        <>
          <p>You have not yet set up a profile, please add some info</p>
          <Link to="/profile/create" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      );
    }
  }, [currentProfile]);
  return (
    <>
      <section className="container">
        <h1 className="large text-primary">
          Dashboard
        </h1>
        <p className="lead">
          <i className="fas fa-user"></i> Welcome {user?.name}
        </p>
        {displayProfile}
        <EducationDetails edus={currentProfile?.education} />
        <ExperienceDetails experiences={currentProfile?.experience} />
        {currentProfile ? (
          <>
            <div className="my-2">
              <button className="btn btn-danger" onClick={() => dispatch()}>
                <i className="fas fa-user-minus" /> Delete My Account
              </button>
            </div>
          </>
        ) : (
          <>
            <p>You have not yet set up a profile, please add some info</p>
            <Link to="/profile/create" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </>
        )}{" "}
      </section>
    </>
  );
};

export default Dashboard