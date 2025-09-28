import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { addEducationAction, getCurrentUserProfileAction } from "../../redux/profileAction";

const initialState = {
    school: "GGSIPU",
    degree: "MCA",
    fieldofstudy: "Computers",
    from: "22-11-1999",
    to: "22-11-2002",
    current: false,
    description: "This is the description",
};

const AddEducation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addingEducation = useMatch("/Profile/addEducation");
    const { currentProfile, loading } = useSelector((state) => state.profileReducer);
    const title = useMemo(
        () => (addingEducation ? "Add Your Education" : "Edit Your Education"),
        [addingEducation]
    );
    const [formData, setFormData] = useState(initialState);
    const { school, degree, fieldofstudy, from, to, current, description } = formData;

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
        const editing = Boolean(currentProfile.education);
        console.log("Got Profile", currentProfile);
        console.log("Adding education...", formData);
        dispatch(addEducationAction(formData, editing));
        console.log("Education added", formData);
    };

    return (<>
        <section className="container">
            <h1 className="large text-primary">
                {title}
            </h1>
            <p className="lead">
                <i className="fas fa-graduation-cap"></i>Add any school, bootcamp, etc that
                you have attended
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* School or Bootcamp"
                        name="school"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Field Of Study" name="fieldofstudy" onChange={onChange} />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" onChange={onChange} />
                </div>
                <div className="form-group">
                    <p>
                        <input type="checkbox" name="current" value="" onChange={onCheckboxChange} /> Current School or Bootcamp
                    </p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" onChange={onChange} />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
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
    </>);
};

export default AddEducation;