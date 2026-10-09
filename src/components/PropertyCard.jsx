import { Link } from "react-router-dom";
import { formatPrice, onImgError } from "../utils";

export default function PropertyCard({ p }) {
  return (
    <Link to={`/properties/${p.id}`} className="card">
      <div className="card-img">
        <img src={p.image} alt={p.title} loading="lazy" onError={onImgError} />
        <span className={`badge ${p.status === "Rent" ? "rent" : ""}`}>For {p.status}</span>
      </div>
      <div className="card-body">
        <div className="price">{formatPrice(p.price, p.status)}</div>
        <h3>{p.title}</h3>
        <p className="muted">📍 {p.address}, {p.city}</p>
        <div className="meta">
          {p.beds > 0 && <span>🛏 {p.beds} Beds</span>}
          {p.baths > 0 && <span>🛁 {p.baths} Baths</span>}
          <span>📐 {p.area} sqft</span>
        </div>
      </div>
    </Link>
  );
}