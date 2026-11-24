
// Week 4 Day 1 Topic # 4  MODELS

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

