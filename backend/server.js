const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const contactRoutes = require("./routers/contactRoutes");
const bookingRoute = require("./routers/bookingRoute");

app.use("/api/contact", contactRoutes);
app.use("/api/booking", bookingRoute);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.json({ message: "Rentiva Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
