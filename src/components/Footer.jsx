import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 className="logo light">Estate<span>Hub</span></h3>
          <p>Find your perfect home with trusted agents and verified listings.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/properties">Properties</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>📍 Thanjavur, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@estatehub.com</p>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} EstateHub. All rights reserved.</div>
    </footer>
  );
}