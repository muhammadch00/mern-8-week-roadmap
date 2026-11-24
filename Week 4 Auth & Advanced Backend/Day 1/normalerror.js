
// Week 4 Day 1 Topic  6. NORMAL ERROR HANDLING

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