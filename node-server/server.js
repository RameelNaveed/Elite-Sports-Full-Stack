const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/userR.js");
const trainerRoutes = require("./routes/trainerR.js");
const paymentRoutes= require("./routes/paymentR.js");
const paymentStatusRoutes=require("./routes/paymentStatusR.js");
const membershipRoutes=require("./routes/membershipR.js");
const membershipTypeRoutes=require("./routes/membershipTypeR.js");
const trainerBookingRoutes = require("./routes/trainerBookingsR.js");
//const trainerTimes = require("./routes/trainerTimesR.js");
const facilityRoutes = require("./routes/facilitiesRoutes");
//const facilityTimeRoutes = require("./routes/facilityTimesRoutes");
const bookingRoutes = require("./routes/bookingsRoutes");
const timeslotRoutes = require("./routes/timeslotRoutes");
const feedbackRoutes = require("./routes/feedbackR");



const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/paymentStatus",paymentStatusRoutes);
app.use("/api/memberships",membershipRoutes);
app.use("/api/membershipTypes",membershipTypeRoutes);
app.use("/api/trainerbookings", trainerBookingRoutes);
app.use("/api/timeslot", timeslotRoutes);
//app.use("/api/trainer-times", trainerTimes);
app.use("/api/facilities", facilityRoutes);
//app.use("/api/facility-times", facilityTimeRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/feedback", feedbackRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
});