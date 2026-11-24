
// ==================================================
// WEEK 4 — DAY 1: PROJECT STRUCTURE & ERROR HANDLING
// ==================================================


// 1. PROJECT STRUCTURE

// Backend project ko different folders mein organize karte hain.

// routes:
// API endpoints handle karne ke liye.

// controllers:
// Actual business logic likhne ke liye.

// models:
// MongoDB data ka structure define karne ke liye.

// middleware:
// Request aur response ke darmiyan extra functions ke liye.


// 2. ROUTES

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


// 3. CONTROLLERS

// Controller mein actual business logic hoti hai.

// Example: employeeController.js

// Get All Employees
const getEmployees = (req, res) => {

    res.json({
        success: true,
        message: "All Employees"
    });

};

// Controller export karna
module.exports = {
    getEmployees
};


// 4. MODELS

// Model database ke data ka structure define karta hai.

// Example: Employee.js

const mongoose = require("mongoose");

// Employee Schema
const employeeSchema = new mongoose.Schema({

    // Employee Name
    name: {
        type: String,
        required: true
    },

    // Employee Email
    email: {
        type: String,
        required: true
    }

});

// Create Model
const Employee = mongoose.model("Employee", employeeSchema);

// Model export karna
module.exports = Employee;


// 5. REQUEST FLOW

// Client se request aati hai.

// Routes request receive karti hain.

// Controller actual logic execute karta hai.

// Model database ke saath kaam karta hai.

// Controller response send karta hai.

// Flow:
// Client → Routes → Controllers → Models → Database


// 6. NORMAL ERROR HANDLING

// Normal error handling mein har controller ke andar
// alag try/catch aur error response likhte hain.

// Example:

try {

    // Code that may produce an error

} catch (error) {

    res.status(500).json({
        success: false,
        message: error.message
    });

}


// 7. CENTRAL ERROR HANDLER

// Central Error Handler aik common middleware hai.

// Is mein hum application ke errors aik jagah handle karte hain.

// Example: errorMiddleware.js

const errorHandler = (err, req, res, next) => {

    res.status(500).json({
        success: false,
        message: err.message
    });

};

// Middleware export karna
module.exports = errorHandler;


// 8. NEXT(ERROR)

// next() request ko next middleware tak bhejta hai.

// next(error) error ko Central Error Handler tak bhejta hai.

// Example:

const getEmployeesWithError = (req, res, next) => {

    try {

        // Create an error
        throw new Error("Employee Not Found");

    } catch (error) {

        // Send error to Central Error Handler
        next(error);

    }

};


// 9. CONNECT CENTRAL ERROR HANDLER

// server.js mein middleware import karna.

// Example:

// const errorHandler = require("./middleware/errorMiddleware");

// Routes ko connect karna.

// app.use("/api/employees", employeeRoutes);

// Central Error Handler ko routes ke baad lagana.

// app.use(errorHandler);


// ==================================================
// END OF WEEK 4 — DAY 1
// ==================================================
