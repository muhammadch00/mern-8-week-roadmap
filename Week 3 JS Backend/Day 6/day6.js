// ==================================================
// WEEK 3 — DAY 6: REST API DESIGN & TESTING
// ==================================================

// Is file ko Day 6 complete karte waqt fill karenge.
//
// Planned topics:
// 1. CRUD mapping: GET, POST, PUT, PATCH, DELETE
// 2. REST endpoint design
// 3. Postman / Thunder Client
// 4. Request body aur headers test karna
// 5. Status codes verify karna
//
// Abhi Day 6 ka practical code add nahi kiya gaya.


// WEEK 3 — DAY 6
// REST API DESIGN & TESTING


const express = require("express");
const app = express();

app.use(express.json());

// Employees Data
let employees = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Sara" }
];

// GET All Employees
app.get("/employees", (req, res) => {
    res.status(200).send(employees);
});

// GET Single Employee
app.get("/employees/:id", (req, res) => {
    res.status(200).send("Employee Found");
});

// POST Employee
app.post("/employees", (req, res) => {
    employees.push(req.body);
    res.status(201).send("Employee Added");
});

// PUT Employee
app.put("/employees/:id", (req, res) => {
    res.status(200).send("Employee Updated");
});

// PATCH Employee
app.patch("/employees/:id", (req, res) => {
    res.status(200).send("Employee Updated");
});

// DELETE Employee
app.delete("/employees/:id", (req, res) => {
    res.status(200).send("Employee Deleted");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
