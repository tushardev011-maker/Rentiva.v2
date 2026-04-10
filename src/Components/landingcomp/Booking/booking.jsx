import React, { useState } from "react";
import "./booking.css";
import carsData from "../../../Data/carsdata";

const API = import.meta.env.VITE_API_URL;

function Booking() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", car: "",
    pickupDate: "", returnDate: "", destination: "", license: "",
  });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ loading: false, success: "", error: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const res = await fetch(`${API}/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: data.message, error: "" });
        setFormData({ name: "", email: "", phone: "", car: "",
          pickupDate: "", returnDate: "", destination: "", license: "" });
      } else {
        setStatus({ loading: false, success: "", error: data.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ loading: false, success: "", error: " Unable to connect to the server.." });
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="booking" id="bookings">
      <div className="booking-header">
        <h1>Book Your Ride</h1>
        <p>Luxury • Comfort • Reliability</p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-grid">

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Your Name"
              value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="rentiva@gmail.com"
              value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="+91 98765 43210"
              value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Select Car</label>
            <select name="car" value={formData.car} onChange={handleChange} required>
              <option value="">Choose your car</option>
              {carsData.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} — {c.price}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Pickup Date</label>
            <input type="date" name="pickupDate" value={formData.pickupDate}
              min={today} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Return Date</label>
            <input type="date" name="returnDate" value={formData.returnDate}
              min={formData.pickupDate || today}
              disabled={!formData.pickupDate}
              onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Destination</label>
            <input type="text" name="destination" placeholder="Delhi → Chandigarh"
              value={formData.destination} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Driving License Number</label>
            <input type="text" name="license" placeholder="DL-0420110149646"
              value={formData.license} onChange={handleChange} required />
          </div>

          {formData.car && (
            <div className="booking-summary">
              <p><b>{formData.car}</b> selected for your journey</p>
            </div>
          )}

        </div>

        {status.success && <p style={{ color: "green", textAlign: "center", marginBottom: "12px" }}>{status.success}</p>}
        {status.error   && <p style={{ color: "red",   textAlign: "center", marginBottom: "12px" }}>{status.error}</p>}

        <button className="book-btn1" type="submit" disabled={status.loading}>
          {status.loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </section>
  );
}

export default Booking;
