
// ==================================================
// WEEK 4 — DAY 2: MONGODB RELATIONSHIPS
// ==================================================

const mongoose = require("mongoose");


// ==================================================
// 2. DEPARTMENT SCHEMA
// ==================================================

// Schema define karta hai ke Department
// collection mein kis type ka data save hoga.

const departmentSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },


    description: {
        type: String
    }

});



const Department = mongoose.model("Department", departmentSchema);


// ==================================================
// 3. EMPLOYEE SCHEMA
// ==================================================

// Employee ka data define karne ke liye Schema.
const employeeSchema = new mongoose.Schema({

    // Employee ka full name.
    name: {
        type: String,
        required: true
    },

    // Employee ka email address.
    email: {
        type: String,
        required: true
    },


    // ----------------------------------------------
    // DEPARTMENT REFERENCE
    // ----------------------------------------------

    // Employee kis Department mein kaam karta hai.
    department: {

        // ObjectId department document ki unique ID save karega.
        type: mongoose.Schema.Types.ObjectId,

        // ref batata hai ke ye ID Department Model se related hai.
        ref: "Department"

    }

});



const Employee = mongoose.model("Employee", employeeSchema);


// ==================================================
// 4. POPULATE
// ==================================================


const getEmployees = async () => {

    // Populate department ki ID ko use karke
    // Department collection se uski complete details laata hai.
    const employees = await Employee.find()
        .populate("department");

    // Employees ka result return karo.
    return employees;

};


// ==================================================
// 5. EMBEDDING VS REFERENCING
// ==================================================


// EMBEDDING:
// Related data same document ke andar save hota hai.
// Example:
// Employee ke document mein department ka name,
// description aur doosri details directly save karna.
//
// Ismein separate Department reference ki zaroorat nahi hoti.


// REFERENCING:
// Related data separate collection mein save hota hai.
// Employee document mein sirf Department ki ObjectId hoti hai.
//
// ref batata hai ke relationship kis Model ke saath hai.
// populate() referenced Department ki details retrieve karta hai.


// ==================================================
// 6. EXPORT MODELS AND FUNCTION
// ==================================================

// module.exports ki help se hum in models aur function
// ko doosri JavaScript files mein use kar sakte hain.

module.exports = {
    Department,
    Employee,
    getEmployees
};
