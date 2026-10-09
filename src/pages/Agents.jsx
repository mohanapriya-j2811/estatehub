import { Link } from "react-router-dom";
import { agents } from "../data/agents";

export default function Agents() {
  return (
    <div className="container section">
      <h1>Our Agents</h1>
      <p className="muted">Experienced professionals ready to help you.</p>
      <div className="grid">
        {agents.map((a) => (
          <Link key={a.id} to={`/agents/${a.id}`} className="agent-card">
            <img src={a.photo} alt={a.name} />
            <h3>{a.name}</h3>
            <p className="muted">{a.role}</p>
            <p className="muted">📍 {a.city} · {a.experience} yrs exp.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}