// ==================================================
// WEEK 3 — DAY 1: EXPRESS SETUP & SERVER
// ==================================================

// Express ko import karna
const express = require("express");

// Express application create karna
const app = express();

// JSON request body read karne ke liye middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Office Management API!");
});

// Server start karna
app.listen(10000, () => {
    console.log("Office Management API running on port 10000");
});
