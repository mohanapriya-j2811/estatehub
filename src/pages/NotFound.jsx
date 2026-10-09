import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container section center">
      <h1>404</h1>
      <p className="muted">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}