import { Link } from "react-router-dom";

const DashboardAction = () => {
  return (
    <>
    <div className="dash-buttons">
      <Link to="/profile/edit" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      <Link to="/profile/addExperience" className="btn btn-light">
        <i className="fab fa-black-tie text-primary" /> Add Experience
      </Link>
      <Link to="/profile/addEducation" className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary" /> Add Education
      </Link>
    </div>
    </>
  );
};

export default DashboardAction;