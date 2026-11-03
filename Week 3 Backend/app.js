// ==================================================
// OFFICE MANAGEMENT API — MAIN SERVER
// ==================================================

require("dotenv").config();

const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

// Basic request logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Office Management API!");
});

// Employee routes
app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
    console.log(`Office Management API running on port ${PORT}`);
});
