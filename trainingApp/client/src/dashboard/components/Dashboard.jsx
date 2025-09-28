import React, { use, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserProfileAction } from '../../profile/redux/profileAction';
import { Link } from 'react-router-dom';
import DashboardAction from './DashboardAction';

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
      <h2 class="my-2">Experience Credentials</h2>
       <>{JSON.stringify(currentProfile.experience)}</>
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th class="hide-sm">Title</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td class="hide-sm">Senior Developer</td>
            <td class="hide-sm">
              02-03-2009 - 01-02-2014
            </td>
            <td>
              <button class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>Traversy Media</td>
            <td class="hide-sm">Instructor & Developer</td>
            <td class="hide-sm">
              02-03-2015 - Now
            </td>
            <td>
              <button class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 class="my-2">Education Credentials</h2>
       <>{JSON.stringify(currentProfile.education)}</>
      <table class="table">
          <thead>
            <tr>
              <th>School</th>
              <th class="hide-sm">Degree</th>
              <th class="hide-sm">Years</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Northern Essex</td>
              <td class="hide-sm">Associates</td>
              <td class="hide-sm">
                02-03-2007 - 01-02-2009
              </td>
              <td>
                <button class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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