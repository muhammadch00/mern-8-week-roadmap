// ==================================================
// WEEK 3 — DAY 5: HTTP & ADVANCED EXPRESS
// ==================================================

// HTTP STATUS CODES
// 200 — OK: Request successful
// 201 — Created: New resource create hua
// 400 — Bad Request: Client ne invalid data bheja
// 404 — Not Found: Resource nahi mila
// 500 — Internal Server Error: Server mein unexpected error

const express = require("express");
const app = express();

app.use(express.json());

// CUSTOM MIDDLEWARE
function checkRequest(req, res, next) {
    console.log("Office API Request Received!");
    next();
}

// Middleware register karna
app.use(checkRequest);

// Home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Office Management API!");
});

// Example: successful response
app.get("/employees", (req, res) => {
    res.status(200).json({ message: "Employees found!" });
});

// Example: resource created
app.post("/employees", (req, res) => {
    res.status(201).json({ message: "New employee created!" });
});

// Example: resource not found
app.get("/employee", (req, res) => {
    res.status(404).json({ message: "Employee not found!" });
});

// HTTP HEADERS
// Request headers read karna:
app.get("/header-check", (req, res) => {
    const contentType = req.headers["content-type"];
    console.log(contentType);

    // Response header set karna:
    res.set("Content-Type", "text/plain");
    res.send("Headers checked!");
});

// express.Router() ka example alag routes/employeeRoutes.js mein hai.
// REST resource naming examples:
// GET    /employees
// GET    /employees/5
// POST   /employees
// PUT    /employees/5
// PATCH  /employees/5
// DELETE /employees/5

app.listen(process.env.PORT || 10000, () => {
    console.log("Day 5 server running!");
});
