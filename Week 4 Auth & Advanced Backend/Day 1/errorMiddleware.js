

// Week 4 Day 1 Topic  7. CENTRAL ERROR HANDLER

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

