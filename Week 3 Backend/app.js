/*
====================================================
WEEK 3 — OFFICE MANAGEMENT API
Node.js + Express.js
====================================================

DAY 1 — EXPRESS SETUP & SERVER
DAY 2 — GET AND POST ROUTES
DAY 3 — ROUTE PARAMETERS, PUT AND DELETE
DAY 4 — NODE.JS FUNDAMENTALS

NOTE:
Abhi MongoDB connected nahi hai.
API requests handle karti hai, lekin data permanently save nahi hota.
*/


// ==================================================
// DAY 1 — EXPRESS SETUP & SERVER
// ==================================================

const express = require("express");
const getemploy = require("./employe");

console.log(getemploy());

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Office Management API!");
});


// ==================================================
// DAY 2 — GET AND POST ROUTES
// ==================================================

// GET — Employees
app.get("/employees", (req, res) => {
    const department = req.query.department;

    console.log(department);
    res.send(`Employees department: ${department}`);
});

// GET — Departments
app.get("/departments", (req, res) => {
    res.send("Welcome to Office Departments Management!");
});

// POST — New Employee
app.post("/employees", (req, res) => {
    console.log(req.body);
    console.log(req.body.department);

    res.send("New employee data received!");
});

// POST — New Department
app.post("/departments", (req, res) => {
    res.send("New department route reached!");
});


// ==================================================
// DAY 3 — ROUTE PARAMETERS, PUT AND DELETE
// ==================================================

// GET — Route Parameters
app.get("/employees/:id/:department", (req, res) => {
    const employeeId = req.params.id;
    const department = req.params.department;

    res.send(`Welcome Employee ${employeeId}, ${department}`);
});

// PUT — Update Employee Request
app.put("/employees/:id", (req, res) => {
    const employeeId = req.params.id;
    const department = req.body.department;

    res.send(
        `Employee ${employeeId} department update request: ${department}`
    );
});

// DELETE — Employee Request
app.delete("/employees/:id", (req, res) => {
    const employeeId = req.params.id;

    res.send(`Employee ${employeeId} delete request received!`);
});


// ==================================================
// DAY 3 — FETCH API PRACTICE
// ==================================================

/*
Run this code in browser DevTools Console:

fetch("http://localhost:10000/employees", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Sara Khan",
        department: "HR",
        position: "HR Manager"
    })
})
.then(response => response.text())
.then(data => console.log(data));
*/


// ==================================================
// DAY 4 — NODE.JS FUNDAMENTALS
// ==================================================


// 1. OS MODULE

const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log("Total Memory:", os.totalmem());


// 2. FILE SYSTEM MODULE

const fs = require("fs");

// Create and write file
fs.writeFileSync("employees.txt", "Ali - IT Department");

// Read file
const data = fs.readFileSync("employees.txt", "utf8");
console.log(data);

// Create department file
fs.writeFileSync(
    "departments.txt",
    "IT - Department, GD - Department"
);

// Append data
fs.appendFileSync("departments.txt", "\nHR Department");

// Read updated data
const data2 = fs.readFileSync("departments.txt", "utf8");
console.log(data2);

// Delete file
fs.unlinkSync("employees.txt");

// Create folders
fs.mkdirSync("employees", { recursive: true });
fs.mkdirSync("department", { recursive: true });

// Read folder contents
const files = fs.readdirSync("department");
console.log(files);


// 3. PATH MODULE

const path = require("path");

// Join paths
const filePath = path.join("employees", "employe.js");
console.log(filePath);

// Get filename
console.log(path.basename("employees/ali.txt"));

// Get folder name
console.log(path.dirname("employees/ali.txt"));

// Get extension
console.log(path.extname("employees/ali.txt"));

// Get absolute path
const fullPath = path.resolve("employees", "ali.txt");
console.log(fullPath);

// Join with current directory
const filePath2 = path.join(__dirname, "employees", "ali.txt");
console.log(filePath2);


// 4. ENVIRONMENT VARIABLES

// .env file:
// PORT=10000

require("dotenv").config();

const PORT = process.env.PORT;


// 5. SERVER START

app.listen(PORT, () => {
    console.log(`Office Management API running on port ${PORT}`);
});


// ==================================================
// DAY 4 — NPM SCRIPTS
// ==================================================

/*
package.json:

"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}

Commands:

npm start
npm run dev
*/


// ==================================================
// DAY 4 — NODEMON
// ==================================================

/*
Install:

npm install --save-dev nodemon

Run development server:

npm run dev

Nodemon automatically restarts the server
when app.js changes.
*/


// ==================================================
// QUICK REVISION
// ==================================================

/*
req.params  — Route parameters
req.query   — URL query parameters
req.body    — Request body
res.send()  — Send response
express.json() — Parse JSON body
fetch()     — Send HTTP requests
fs          — File system operations
path        — File path operations
os          — Operating system information
process.env — Environment variables
nodemon     — Automatic server restart

IMPORTANT:
MongoDB is not connected yet.
Employee records are not permanently stored.
*/