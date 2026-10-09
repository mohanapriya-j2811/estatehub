import { Link, useParams } from "react-router-dom";
import { agents } from "../data/agents";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import NotFound from "./NotFound";

export default function AgentDetails() {
  const { id } = useParams();
  const a = agents.find((x) => x.id === Number(id));
  if (!a) return <NotFound />;
  const listings = properties.filter((p) => p.agentId === a.id);

  return (
    <div className="container section">
      <Link to="/agents" className="link">← All agents</Link>
      <div className="agent-profile">
        <img src={a.photo} alt={a.name} />
        <div>
          <h1>{a.name}</h1>
          <p className="muted">{a.role} · {a.city}</p>
          <p>{a.bio}</p>
          <div className="spec-grid small">
            <div><strong>{a.experience}+</strong><span>Years</span></div>
            <div><strong>{a.sold}+</strong><span>Properties Sold</span></div>
            <div><strong>{listings.length}</strong><span>Active Listings</span></div>
          </div>
          <p>📞 {a.phone}</p>
          <p>✉️ {a.email}</p>
          <a href={`mailto:${a.email}`} className="btn">Email Agent</a>
        </div>
      </div>

      <h2>Listings by {a.name.split(" ")[0]}</h2>
      <div className="grid">
        {listings.map((p) => <PropertyCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}