import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  setCredentials,
  setError,
  setLoading,
  setUser,
} from "../rtk/authSlice";
import useToggle from "../../utils/hooks/useToggle";
import { useLazyLoadMeQuery, useRegisterMutation } from "../rtk/authAPI";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/common";

export default function Register() {
  const [isOn, toggleOn] = useToggle(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, status, error, token } = useAppSelector((s) => s.auth);

  // To Ask
  const [register, { isLoading }] = useRegisterMutation();
  // To Ask
  const [triggerMe] = useLazyLoadMeQuery();

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading());
      const res = await register(form).unwrap(); // { token, user }
      dispatch(setCredentials({ token: res.token, user: res.user }));
      if (!res.user && (token || res.token)) {
        const me = await triggerMe().unwrap();
        dispatch(setUser(me));
      }
      navigate("/dashboard");
    } catch (err) {
      const msg = err?.data?.message || "Registration failed";
      dispatch(setError(msg));
    }
  };

  return (
    <div className="auth-card">
      <h1>Create Your Account</h1>
      <div>
        <h2>Light is {isOn ? "ON" : "OFF"}</h2>
        <button onClick={toggleOn}>Toggle</button>
      </div>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Doe"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="john@example.com"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="••••••••"
            minLength={6}
            required
          />
        </label>

        <button type="submit" disabled={isLoading || status === "loading"}>
          {isLoading || status === "loading" ? "Creating..." : "Register"}
        </button>

        {error && <p className="error">{error}</p>}
      </form>

      <p className="muted">
        Already have an account? <Link to="/auth/login">Sign In</Link>
      </p>
    </div>
  );
}