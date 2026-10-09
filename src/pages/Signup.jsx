import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");
    const res = signup(form);
    if (res.ok) nav("/");
    else setError(res.error);
  };

  return (
    <div className="auth-wrap">
      <form className="auth-box form" onSubmit={submit}>
        <h2>Create Account</h2>
        <p className="muted">Join EstateHub today</p>
        {error && <div className="error">{error}</div>}
        <input required placeholder="Full name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required type="email" placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input required type="password" placeholder="Password (min 6 chars)" value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="btn">Sign Up</button>
        <p className="center">Already have an account? <Link to="/login" className="link">Login</Link></p>
      </form>
    </div>
  );
}