import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const res = login(form);
    if (res.ok) nav("/");
    else setError(res.error);
  };

  return (
    <div className="auth-wrap">
      <form className="auth-box form" onSubmit={submit}>
        <h2>Welcome Back</h2>
        <p className="muted">Login to your account</p>
        {error && <div className="error">{error}</div>}
        <input required type="email" placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input required type="password" placeholder="Password" value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="btn">Login</button>
        <p className="center">New here? <Link to="/signup" className="link">Create account</Link></p>
      </form>
    </div>
  );
}