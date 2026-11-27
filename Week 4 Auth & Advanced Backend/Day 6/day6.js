
// ==========================================
// WEEK 4 — DAY 6
// BACKEND SECURITY & VALIDATION
// ==========================================


// 1. INPUT VALIDATION (EXPRESS-VALIDATOR)

const { body, validationResult } = require("express-validator");

// Employee validation rules
const validateEmployee = [

    // Name required hai
    body("name")
        .notEmpty()
        .withMessage("Name is Required"),

    // Email valid hona chahiye
    body("email")
        .isEmail()
        .withMessage("Invalid Email"),

    // Salary number aur positive honi chahiye
    body("salary")
        .isFloat({ min: 0 })
        .withMessage("Invalid Salary")

];


// 2. CHECK VALIDATION ERRORS

function checkValidation(req, res, next) {

    // Validation errors check karo
    const errors = validationResult(req);

    // Agar errors hain
    if (!errors.isEmpty()) {

        return res.status(400).json({
            success: false,
            errors: errors.array()
        });

    }

    next();
}


// 3. CORS SECURITY

const cors = require("cors");

// CORS configuration
const corsOptions = {

    // Allowed frontend
    origin: "http://localhost:5500"

};


// 4. HELMET SECURITY

const helmet = require("helmet");

// Helmet middleware
const helmetSecurity = helmet();


// 5. RATE LIMITING

const rateLimit = require("express-rate-limit");

// Create rate limiter
const limiter = rateLimit({

    // 15 minutes
    windowMs: 15 * 60 * 1000,

    // Maximum 100 requests
    max: 100,

    // Error message
    message: "Too Many Requests. Try Again Later"

});


// 6. ENVIRONMENT VARIABLES (SECRETS)

require("dotenv").config();

// Get PORT
const PORT = process.env.PORT;

// Get MongoDB URL
const MONGO_URI = process.env.MONGO_URI;

// Get JWT Secret
const JWT_SECRET = process.env.JWT_SECRET;


// 7. EXPORT FUNCTIONS AND MIDDLEWARE

module.exports = {

    validateEmployee,
    checkValidation,

    cors,
    corsOptions,

    helmetSecurity,

    limiter,

    PORT,
    MONGO_URI,
    JWT_SECRET

};


// ==========================================
// END WEEK 4 — DAY 6
// ==========================================
