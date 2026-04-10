import { useState } from "react";
import "./contact.css";

const API = import.meta.env.VITE_API_URL;

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ loading: false, success: "", error: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: "Message sent!", error: "" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, success: "", error: data.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ loading: false, success: "", error: "Unable to connect to the server.." });
    }
  }

  return (
    <div className="contact" id="contacts">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>

        <input name="name" placeholder="Name"
          value={formData.name} onChange={handleChange} required />

        <input name="email" type="email" placeholder="Email"
          value={formData.email} onChange={handleChange} required />

        <textarea name="message" placeholder="Message"
          value={formData.message} onChange={handleChange} required />

        {status.success && <p style={{ color: "green" }}>{status.success}</p>}
        {status.error   && <p style={{ color: "red"   }}>{status.error}</p>}

        <button type="submit" disabled={status.loading}>
          {status.loading ? "Sending..." : "Send"}
        </button>

      </form>
    </div>
  );
}

export default Contact;
