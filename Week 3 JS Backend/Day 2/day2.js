// ==================================================
// WEEK 3 — DAY 2: GET AND POST ROUTES
// ==================================================

const express = require("express");
const app = express();

app.use(express.json());

// GET — Employees ko request karna
app.get("/employees", (req, res) => {
    const department = req.query.department;
    console.log(department);
    res.send(`Employees department: ${department}`);
});

// GET — Departments
app.get("/departments", (req, res) => {
    res.send("Welcome to Office Departments Management!");
});

// POST — New Employee data receive karna
app.post("/employees", (req, res) => {
    console.log(req.body);
    console.log(req.body.department);
    res.send("New employee data received!");
});

// POST — New Department
app.post("/departments", (req, res) => {
    res.send("New department route reached!");
});

app.listen(10000, () => {
    console.log("Day 2 server running on port 10000");
});
