import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { properties, cities, types } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Properties() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("default");

  const f = {
    q: params.get("q") || "",
    status: params.get("status") || "All",
    type: params.get("type") || "All",
    city: params.get("city") || "All",
    beds: params.get("beds") || "All",
    maxPrice: params.get("maxPrice") || "All",
  };

  const update = (key, value) => {
    const p = new URLSearchParams(params);
    if (value && value !== "All") p.set(key, value);
    else p.delete(key);
    setParams(p);
  };

  const results = useMemo(() => {
    let list = properties.filter((p) => {
      const text = `${p.title} ${p.city} ${p.address} ${p.type}`.toLowerCase();
      return (
        text.includes(f.q.toLowerCase()) &&
        (f.status === "All" || p.status === f.status) &&
        (f.type === "All" || p.type === f.type) &&
        (f.city === "All" || p.city === f.city) &&
        (f.beds === "All" || p.beds >= Number(f.beds)) &&
        (f.maxPrice === "All" || p.price <= Number(f.maxPrice))
      );
    });
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [params, sort]); // eslint-disable-line

  return (
    <div className="container section">
      <h1>Properties</h1>
      <p className="muted">Find the perfect property using the filters below.</p>

      <div className="filters">
        <input placeholder="Search..." value={f.q} onChange={(e) => update("q", e.target.value)} />
        <select value={f.status} onChange={(e) => update("status", e.target.value)}>
          <option value="All">Buy / Rent</option>
          <option value="Sale">For Sale</option>
          <option value="Rent">For Rent</option>
        </select>
        <select value={f.type} onChange={(e) => update("type", e.target.value)}>
          <option value="All">All Types</option>
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={f.city} onChange={(e) => update("city", e.target.value)}>
          <option value="All">All Cities</option>
          {cities.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={f.beds} onChange={(e) => update("beds", e.target.value)}>
          <option value="All">Any Beds</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
        <select value={f.maxPrice} onChange={(e) => update("maxPrice", e.target.value)}>
          <option value="All">Any Price</option>
          <option value="50000">Up to ₹50K</option>
          <option value="5000000">Up to ₹50 L</option>
          <option value="10000000">Up to ₹1 Cr</option>
          <option value="30000000">Up to ₹3 Cr</option>
        </select>
        <button className="btn btn-outline" onClick={() => setParams({})}>Reset</button>
      </div>

      <div className="results-bar">
        <span>{results.length} properties found</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort: Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {results.length ? (
        <div className="grid">
          {results.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      ) : (
        <div className="empty">😕 No properties match your filters.</div>
      )}
    </div>
  );
}