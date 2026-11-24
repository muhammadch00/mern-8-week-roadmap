
// Week 4 Day 1 Topic #  3. CONTROLLERS

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
