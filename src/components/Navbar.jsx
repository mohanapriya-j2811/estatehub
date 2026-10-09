import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={close}>
          Estate<span>Hub</span>
        </Link>

        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/properties" onClick={close}>Properties</NavLink>
          <NavLink to="/agents" onClick={close}>Agents</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>

          {user ? (
            <div className="nav-auth">
              <span className="hello">Hi, {user.name.split(" ")[0]}</span>
              <button className="btn btn-outline btn-sm" onClick={() => { logout(); close(); }}>
                Logout
              </button>
            </div>
          ) : (
            <div className="nav-auth">
              <Link to="/login" className="btn btn-outline btn-sm" onClick={close}>Login</Link>
              <Link to="/signup" className="btn btn-sm" onClick={close}>Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}