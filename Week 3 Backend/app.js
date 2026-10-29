
/*
====================================================
WEEK 3 — OFFICE MANAGEMENT API
Node.js + Express.js
====================================================

ROADMAP:
Day 1 — Express Setup & Server
Day 2 — GET and POST Routes
Day 3 — Request Data, PUT and DELETE

IMPORTANT:
Abhi hum database use nahi kar rahe.
Routes requests ko handle karti hain, lekin data
permanently save/update/delete nahi hota.
*/


// ==================================================
// DAY 1 — NODE.JS, EXPRESS SETUP & SERVER
// ==================================================

// express package import kar rahe hain.
// Express backend API aur server banane mein help karta hai.
const express = require("express");

// Express application create kar rahe hain.
// "app" ke through hum routes aur middleware define karenge.
const app = express();


// Middleware:
// Incoming request ki JSON body ko JavaScript object
// mein convert karne ke liye use hota hai.
// Iske baghair req.body JSON requests ke liye undefined ho sakta hai.
app.use(express.json());


// HOME ROUTE — GET /
// Browser mein http://localhost:10000/ open karne par
// yeh response milega.
app.get("/", (req, res) => {
    res.send("Welcome to Office Management API!");
});


// Server start kar rahe hain.
// Server port 10000 par requests receive karega.
app.listen(10000, () => {
    console.log("Office Management API running on port 10000");
});


// ==================================================
// DAY 2 — GET AND POST ROUTES
// ==================================================


// GET ROUTE — EMPLOYEES
// URL example:
// http://localhost:10000/employees
// http://localhost:10000/employees?department=IT

app.get("/employees", (req, res) => {

    // req.query URL ke query parameters read karta hai.
    // Example: ?department=IT se department ki value "IT" milegi.
    const department = req.query.department;

    // Department ki value terminal mein show hogi.
    console.log(department);

    // Client ko response bhej rahe hain.
    res.send(`Employees department: ${department}`);
});


// GET ROUTE — DEPARTMENTS
// URL: http://localhost:10000/departments

app.get("/departments", (req, res) => {
    res.send("Welcome to Office Departments Management!");
});


// POST ROUTE — NEW EMPLOYEE
// URL: POST http://localhost:10000/employees
// Request body mein employee ki information bheji jayegi.

app.post("/employees", (req, res) => {

    // req.body client ki bheji hui JSON information deta hai.
    console.log(req.body);

    // Department ki value terminal mein check kar sakte hain.
    console.log(req.body.department);

    // Client ko response bhej rahe hain.
    // Note: Is route mein employee database mein save nahi hota.
    res.send("New employee data received!");
});


// POST ROUTE — NEW DEPARTMENT
// URL: POST http://localhost:10000/departments

app.post("/departments", (req, res) => {
    res.send("New department route reached!");
});


// ==================================================
// DAY 3 — ROUTE PARAMETERS, PUT AND DELETE
// ==================================================


// GET ROUTE — EMPLOYEE ID AND DEPARTMENT
// URL example:
// http://localhost:10000/employees/105/HR
//
// :id aur :department dynamic route parameters hain.

app.get("/employees/:id/:department", (req, res) => {

    // URL se employee ki ID read kar rahe hain.
    const employeeId = req.params.id;

    // URL se department ka naam read kar rahe hain.
    const department = req.params.department;

    // Client ko employee ID aur department show kar rahe hain.
    res.send(`Welcome Employee ${employeeId}, ${department}`);
});


// PUT ROUTE — EMPLOYEE DEPARTMENT UPDATE REQUEST
// URL: PUT http://localhost:10000/employees/105
//
// Request body example:
// { "department": "IT" }

app.put("/employees/:id", (req, res) => {

    // URL se employee ID milti hai.
    const employeeId = req.params.id;

    // Request body se new department milta hai.
    const department = req.body.department;

    // Update request ka response bhej rahe hain.
    // Note: Abhi actual record update nahi hota.
    res.send(
        `Employee ${employeeId} department update request: ${department}`
    );
});


// DELETE ROUTE — EMPLOYEE DELETE REQUEST
// URL: DELETE http://localhost:10000/employees/105

app.delete("/employees/:id", (req, res) => {

    // URL se employee ID read kar rahe hain.
    const employeeId = req.params.id;

    // Delete request receive hone ka response.
    // Note: Abhi actual employee record delete nahi hota.
    res.send(`Employee ${employeeId} delete request received!`);
});


// ==================================================
// PRACTICE — FETCH API
// ==================================================

// Yeh code browser ke DevTools Console mein chala sakte ho.
// Pehle confirm karo ke Express server running hai.
//
// fetch("http://localhost:10000/employees", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "Sara Khan",
//         department: "HR",
//         position: "HR Manager"
//     })
// })
// .then(response => response.text())
// .then(data => console.log(data));


// ==================================================
// QUICK REVISION — HTTP METHODS
// ==================================================

/*
GET:
Data read/retrieve karne ke liye.
Example: GET /employees

POST:
Naya data bhejne ya create karne ki request.
Example: POST /employees

PUT:
Existing data update karne ki request.
Example: PUT /employees/105

DELETE:
Data delete karne ki request.
Example: DELETE /employees/105


IMPORTANT CONCEPTS:

req.params  — URL ke dynamic parameters.
req.query   — URL ke query parameters.
req.body    — Request body ka data.
res.send()  — Client ko response bhejta hai.
console.log() — Terminal ya browser console mein value dikhata hai.
fetch()     — Browser se HTTP request bhejta hai.
JSON.stringify() — JavaScript object ko JSON string banata hai.
express.json() — Incoming JSON request body parse karta hai.
*/
