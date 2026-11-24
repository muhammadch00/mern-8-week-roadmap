
// Week 4 Day 1 Topic #  2. ROUTES

// Routes decide karti hain ke kis URL par konsa function chalega.

// Example: employeeRoutes.js

const express = require("express");

const router = express.Router();

// Controller import karna
const { getEmployees } = require("../controllers/employeeController");

// GET All Employees
router.get("/", getEmployees);

// Router export karna
module.exports = router;
