
// ==================================================
// WEEK 3 — DAY 7: MONGODB & MONGOOSE
// ==================================================

// 1. MONGODB INTRODUCTION

// MongoDB aik database hai.
// Is mein hum apna data permanently save kar sakte hain.


// 2. DOCUMENTS, TABLES & COLLECTIONS

// SQL mein Table hoti hai.
// MongoDB mein Collection hoti hai.
// SQL mein Row hoti hai.
// MongoDB mein Document hota hai.

// Example Document

const employee = {
    name: "Ali",
    age: 22,
    department: "IT"
};


// 3. MONGODB ATLAS & COMPASS

// MongoDB Atlas:
// Cloud par database save karta hai.

// MongoDB Compass:
// Database aur employee records dekhne ke liye use hota hai.

// Abhi inka practical setup nahi kar rahe.


// 4. MONGOOSE CONNECTION

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect("YOUR_CONNECTION_STRING")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(() => {
        console.log("Connection Failed");
    });


// 5. SCHEMA & MODEL

// Schema employee ke data ka structure hai.

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String,
    salary: Number
});

// Model database ke saath kaam karta hai.

const Employee = mongoose.model("Employee", employeeSchema);


// 6. VALIDATION

// required: true ka matlab data dena zaroori hai.

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    }
});


// 7. CREATE — Employee Add

Employee.create({
    name: "Ali",
    age: 22,
    department: "IT",
    salary: 30000
});


// 8. READ — All Employees

Employee.find();


// 9. READ — One Employee

Employee.findById("EMPLOYEE_ID");


// 10. UPDATE — Employee Update

Employee.findByIdAndUpdate("EMPLOYEE_ID", {
    name: "Ahmed"
});


// 11. DELETE — Employee Delete

Employee.findByIdAndDelete("EMPLOYEE_ID");


// Server
app.listen(3000, () => {
    console.log("Server running");
});
