// src/components/profile/ProfileForm.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createProfileAction,
  getCurrentUserProfileAction,
} from "../../redux/profileAction";

// Keep initial state OUTSIDE component
const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

export default function ProfileForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const creatingProfile = useMatch("/profile/create");
  console.log("creating profile", creatingProfile);
  // useMatch is used to check if the current URL matches the path
  // redux state
  const { currentProfile, loading } = useSelector((s) => s.profileReducer);

  // local state
  const [formData, setFormData] = useState(initialState);
  const [displaySocialInputs, setDisplaySocialInputs] = useState(false);

  // memoized labels
  const title = useMemo(
    () => (creatingProfile ? "Create Your Profile" : "Edit Your Profile"),
    [creatingProfile]
  );
  const subtitle = useMemo(
    () =>
      creatingProfile
        ? ` Let's get some information to make your`
        : " Add some changes to your profile",
    [creatingProfile]
  );

  // fetch current profile if needed, then hydrate form
  useEffect(() => {
    let isMounted = true;

    if (!currentProfile) {
      dispatch(getCurrentUserProfileAction());
    }

    if (!loading && currentProfile) {
      const profileData = { ...initialState };

      // copy scalar fields
      for (const key in currentProfile) {
        if (key in profileData && currentProfile[key] != null) {
          profileData[key] = currentProfile[key];
        }
      }

      // copy social links
      if (currentProfile.social) {
        for (const key in currentProfile.social) {
          if (key in profileData && currentProfile.social[key] != null) {
            profileData[key] = currentProfile.social[key];
          }
        }
      }

      // normalize skills array -> csv
      if (Array.isArray(profileData.skills)) {
        profileData.skills = profileData.skills.join(", ");
      }

      if (isMounted) setFormData(profileData);
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, loading, currentProfile]);

  // destructure for convenience
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const editing = Boolean(currentProfile);

    // Ensure skills is a trimmed CSV string (API can split server-side)
    const sanitized = {
      ...formData,
      skills:
        typeof skills === "string"
          ? skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
              .join(",")
          : "",
    };

    try {
      await dispatch(createProfileAction(sanitized, editing));
      if (!editing) navigate("/dashboard");
    } catch {
      // errors are already alerted by action; nothing else here
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">{title}</h1>
      <p className="lead">
        <i className="fas fa-user" />
        {subtitle}
      </p>
      <small>* = required field</small>

      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="form-group">
          <select name="status" value={status} onChange={onChange} required>
            <option value="">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
            autoComplete="organization"
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>

        <div className="form-group">
          <input
            type="url"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
            inputMode="url"
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
            autoComplete="address-level2"
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
            required
          />
          <small className="form-text">
            Use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
            autoComplete="off"
          />
          <small className="form-text">
            For latest repos and a Github link, include your username
          </small>
        </div>

        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
            rows={4}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => setDisplaySocialInputs((v) => !v)}
            type="button"
            className="btn btn-light"
            aria-expanded={displaySocialInputs}
            aria-controls="social-inputs"
          >
            Add Social Network Links
          </button>
          <span> Optional</span>
        </div>

        {displaySocialInputs && (
          <div id="social-inputs">
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="url"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
                inputMode="url"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="url"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
                inputMode="url"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="url"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
                inputMode="url"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="url"
                placeholder="LinkedIn URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
                inputMode="url"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="url"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
                inputMode="url"
              />
            </div>
          </div>
        )}

        <input
          type="submit"
          className="btn btn-primary my-1"
          disabled={loading}
          value={loading ? "Saving…" : "Save"}
        />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
}