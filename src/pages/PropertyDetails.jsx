import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { properties } from "../data/properties";
import { agents } from "../data/agents";
import { formatPrice, onImgError } from "../utils";
import NotFound from "./NotFound";

export default function PropertyDetails() {
  const { id } = useParams();
  const p = properties.find((x) => x.id === Number(id));
  const [sent, setSent] = useState(false);
  if (!p) return <NotFound />;
  const agent = agents.find((a) => a.id === p.agentId);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="container section">
      <Link to="/properties" className="link">← Back to properties</Link>
      <img className="detail-img" src={p.image} alt={p.title} onError={onImgError} />

      <div className="detail-layout">
        <div>
          <span className={`badge static ${p.status === "Rent" ? "rent" : ""}`}>For {p.status}</span>
          <h1>{p.title}</h1>
          <p className="muted">📍 {p.address}, {p.city}</p>
          <div className="price big">{formatPrice(p.price, p.status)}</div>

          <div className="spec-grid">
            <div><strong>{p.beds || "-"}</strong><span>Bedrooms</span></div>
            <div><strong>{p.baths || "-"}</strong><span>Bathrooms</span></div>
            <div><strong>{p.area}</strong><span>Sq. Ft.</span></div>
            <div><strong>{p.type}</strong><span>Type</span></div>
          </div>

          <h3>Description</h3>
          <p>{p.description}</p>

          <h3>Features</h3>
          <ul className="features-list">
            {p.features.map((x) => <li key={x}>✔ {x}</li>)}
          </ul>
        </div>

        <aside>
          <div className="side-box">
            <img src={agent.photo} alt={agent.name} className="avatar" />
            <h3>{agent.name}</h3>
            <p className="muted">{agent.role}</p>
            <p>📞 {agent.phone}</p>
            <Link to={`/agents/${agent.id}`} className="link">View profile →</Link>
          </div>

          <div className="side-box">
            <h3>Enquire about this property</h3>
            {sent ? (
              <p className="success">✅ Thanks! The agent will contact you soon.</p>
            ) : (
              <form onSubmit={submit} className="form">
                <input required placeholder="Your name" />
                <input required type="email" placeholder="Email" />
                <input required placeholder="Phone" />
                <textarea rows="3" defaultValue={`I'm interested in "${p.title}".`} />
                <button className="btn">Send Enquiry</button>
              </form>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}