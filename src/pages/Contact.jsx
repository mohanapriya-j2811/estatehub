import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container section">
      <h1>Contact Us</h1>
      <p className="muted">Have a question? We'd love to hear from you.</p>

      <div className="contact-layout">
        <div className="side-box">
          <h3>Get in touch</h3>
          <p>📍 Thanjavur, Tamil Nadu, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@estatehub.com</p>
          <p>🕘 Mon–Sat, 9:00 AM – 6:00 PM</p>
        </div>

        <div className="side-box">
          {sent ? (
            <p className="success">✅ Message sent! We'll get back to you shortly.</p>
          ) : (
            <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input required placeholder="Your name" />
              <input required type="email" placeholder="Email" />
              <input placeholder="Phone (optional)" />
              <textarea required rows="5" placeholder="How can we help?" />
              <button className="btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}