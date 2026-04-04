import React, { useState } from "react";
import "./booking.css";

const cars = [
  "Maruti Swift", "Baleno", "Hyundai i20", "Wagon R", "Alto",
  "Honda City", "Hyundai Verna", "Maruti Ciaz", "Skoda Slavia",
  "Volkswagen Virtus", "Hyundai Creta", "Kia Seltos",
  "Mahindra XUV700", "Toyota Fortuner", "Mahindra Scorpio",
  "Tata Harrier", "Jeep Compass",
  "BMW 3 Series", "Audi A4", "Mercedes C-Class",
  "BMW X5", "Range Rover"
];

function Booking() {
  const [car, setCar] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [destination, setDestination] = useState("");
  const [license, setLicense] = useState("");



  return (
    <section className="booking" id="bookings">
      <div className="booking-header">
        <h1>Book Your Ride</h1>
        <p>Luxury • Comfort • Reliability</p>
      </div>

      <form className="booking-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="User Name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="rentiva.v2@gmail.com" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 98765 43210" />
          </div>

          <div className="form-group">
            <label>Select Car</label>
            <select value={car} onChange={(e) => setCar(e.target.value)}>
              <option value="">Choose your car</option>
              {cars.map((c, index) => (
                <option key={index}>{c}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Pickup Date</label>
            <input
              type="date"
              value={pickupDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setPickupDate(e.target.value)}
            />

          </div>


          <div className="form-group">
            <label>Return Date</label>
            <input
              type="date"
              value={returnDate}
              min={pickupDate}
              disabled={!pickupDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />


          </div>

          <div className="form-group">
            <label>Car Destination</label>
            <input
              type="text"
              placeholder="Delhi → Chandigarh"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Driving License Number</label>
            <input
              type="text"
              placeholder="DL-0420110149646"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
            />
          </div>



          {car && (
            <div className="booking-summary">
              <p>
                <b>{car}</b> selected for your journey
              </p>
            </div>
          )}

        </div>

        <button className="book-btn1">Confirm Booking</button>

      </form>
    </section>
  );
}

export default Booking;