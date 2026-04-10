const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name:        { type: String, required: [true, "Name is required"],        trim: true },
    email:       { type: String, required: [true, "Email is required"],       trim: true, lowercase: true },
    phone:       { type: String, required: [true, "Phone is required"],       trim: true },
    car:         { type: String, required: [true, "Car is required"] },
    pickupDate:  { type: String, required: [true, "Pickup date is required"] },
    returnDate:  { type: String, required: [true, "Return date is required"] },
    destination: { type: String, required: [true, "Destination is required"], trim: true },
    license:     { type: String, required: [true, "License is required"],     trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
