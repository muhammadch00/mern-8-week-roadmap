// ==================================================
// WEEK 3 — DAY 3: ROUTE PARAMETERS, PUT, DELETE & FETCH
// ==================================================

const express = require("express");
const app = express();

app.use(express.json());

// Route parameters — URL se employee ID aur department lena
app.get("/employees/:id/:department", (req, res) => {
    const employeeId = req.params.id;
    const department = req.params.department;
    res.send(`Welcome Employee ${employeeId}, ${department}`);
});

// PUT — Employee department update request
app.put("/employees/:id", (req, res) => {
    const employeeId = req.params.id;
    const department = req.body.department;
    res.send(`Employee ${employeeId} department update request: ${department}`);
});

// DELETE — Employee delete request
app.delete("/employees/:id", (req, res) => {
    const employeeId = req.params.id;
    res.send(`Employee ${employeeId} delete request received!`);
});

app.listen(10000, () => {
    console.log("Day 3 server running on port 10000");
});

/*
FETCH API PRACTICE
Is code ko browser DevTools Console mein run karo
jab Day 3 server chal raha ho.

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
