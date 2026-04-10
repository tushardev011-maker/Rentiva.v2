const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, car, pickupDate, returnDate, destination, license } = req.body;

    if (!name || !email || !phone || !car || !pickupDate || !returnDate || !destination || !license) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    if (new Date(returnDate) < new Date(pickupDate)) {
      return res.status(400).json({ success: false, error: "Return date cannot be before pickup date" });
    }

    const newBooking = new Booking({ name, email, phone, car, pickupDate, returnDate, destination, license });
    await newBooking.save();

    res.status(201).json({
      success: true,
      message: `Booking confirmed! ${car} booked from ${pickupDate} to ${returnDate}.`,
    });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ success: false, error: "Server error. Please try again." });
  }
});

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
