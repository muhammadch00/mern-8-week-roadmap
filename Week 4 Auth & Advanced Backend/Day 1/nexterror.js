
// Week 4 Day 1 Topic 8. NEXT(ERROR)

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