const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 👇 routes
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/job");
const applicationRoutes = require("./routes/application"); // 👈 NEW

// 👇 middleware
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());
app.use(cors());

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/jobportal")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// 👇 routes use
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes); // 👈 NEW

// test route
app.get("/", (req, res) => {
    res.send("API Running 🚀");
});

// 👇 protected route
app.get("/protected", authMiddleware, (req, res) => {
    res.send("Protected route accessed ✅");
});

// server start
app.listen(5000, () => {
    console.log("Server running on port 5000");
});