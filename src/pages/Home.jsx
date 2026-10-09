import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { properties, types } from "../data/properties";
import { agents } from "../data/agents";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  const nav = useNavigate();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const search = (e) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (status) p.set("status", status);
    if (type) p.set("type", type);
    nav(`/properties?${p.toString()}`);
  };

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Browse verified apartments, villas and plots from trusted agents.</p>
          <form className="hero-search" onSubmit={search}>
            <input placeholder="Search city, area or property..." value={q} onChange={(e) => setQ(e.target.value)} />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Buy / Rent</option>
              <option value="Sale">Buy</option>
              <option value="Rent">Rent</option>
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All Types</option>
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button className="btn">Search</button>
          </form>
        </div>
      </section>

      <section className="stats container">
        <div><strong>500+</strong><span>Properties</span></div>
        <div><strong>120+</strong><span>Happy Clients</span></div>
        <div><strong>30+</strong><span>Expert Agents</span></div>
        <div><strong>15+</strong><span>Cities</span></div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Featured Properties</h2>
          <Link to="/properties" className="link">View all →</Link>
        </div>
        <div className="grid">
          {properties.slice(0, 6).map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="center">Why Choose Us</h2>
          <div className="grid features">
            <div className="feature"><span>✅</span><h3>Verified Listings</h3><p>Every property is checked before it goes live.</p></div>
            <div className="feature"><span>🤝</span><h3>Trusted Agents</h3><p>Work with experienced, transparent professionals.</p></div>
            <div className="feature"><span>💰</span><h3>Best Prices</h3><p>Fair deals with no hidden charges.</p></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Meet Our Agents</h2>
          <Link to="/agents" className="link">All agents →</Link>
        </div>
        <div className="grid">
          {agents.map((a) => (
            <Link key={a.id} to={`/agents/${a.id}`} className="agent-card">
              <img src={a.photo} alt={a.name} />
              <h3>{a.name}</h3>
              <p className="muted">{a.role}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to find your next home?</h2>
          <Link to="/contact" className="btn btn-light">Talk to an Expert</Link>
        </div>
      </section>
    </>
  );
}