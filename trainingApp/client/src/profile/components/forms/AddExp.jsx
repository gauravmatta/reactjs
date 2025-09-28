import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addExperienceAction, getCurrentUserProfileAction } from "../../redux/profileAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
    title: "Software Engineer",
    company: "Tech Company",
    location: "San Francisco, CA",
    from: "2020-01-01",
    to: "2021-01-01",
    current: false,
    description: "Worked on various projects.",
};
const AddExp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentProfile, loading } = useSelector((s) => s.profileReducer);
    const [formData, setFormData] = useState(initialState);
    const { title, company, location, from, to, current, description } = formData;

    useEffect(() => {
        let isMounted = true;
        // Redirect if no profile
        if (!currentProfile) {
            dispatch(getCurrentUserProfileAction());
        }
        if (!loading && currentProfile) {
            const updatedFormData = { ...initialState };
            if (isMounted) {
                setFormData(updatedFormData);
            }
        }
        // Cleanup function
        return () => {
            isMounted = false;
        };
    }, [dispatch, loading, currentProfile]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log("form data", formData);
    };
    const onCheckboxChange = (e) => {
        setFormData({ ...formData, current: e.target.checked });
        console.log("form data", formData);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addExperienceAction(formData));
        console.log("submitted form data", formData);
    };
    return (
        <>
            <section className="container">
                <h1 className="large text-primary">Add An Experience</h1>
                <p className="lead">
                    <i className="fas fa-code-branch"></i> Add any developer/programming
                    positions that you have had in the past
                </p>
                <small>* = required field</small>
                <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="* Job Title" name="title" value={title} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="* Company" name="company" value={company} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Location" name="location" value={location} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <h4>From Date</h4>
                        <input type="date" name="from" value={from} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <p><input type="checkbox" name="current" checked={current} onChange={onCheckboxChange} /> Current Job</p>
                    </div>
                    <div className="form-group">
                        <h4>To Date</h4>
                        <input type="date" name="to" value={to} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="description"
                            cols="30"
                            rows="5"
                            placeholder="Job Description"
                            value={description}
                            onChange={onChange}
                        ></textarea>
                    </div>
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
        </>
    );
};
export default AddExp;