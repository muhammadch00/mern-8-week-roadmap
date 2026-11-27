
// ==========================================
// WEEK 4 — DAY 5
// AUTHORIZATION (ROLES + OWNERSHIP)
// ==========================================

// 1. ADMIN AUTHORIZATION
function adminOnly(req, res, next) {

    // Check karo user admin hai ya nahi
    if (req.user.role !== "admin") {

        return res.status(403).json({
            message: "Access Denied"
        });

    }

    next();
}


// 2. USER AUTHORIZATION
function userOnly(req, res, next) {

    // Check karo user normal user hai ya nahi
    if (req.user.role !== "user") {

        return res.status(403).json({
            message: "Only Users Allowed"
        });

    }

    next();
}


// 3. OWNERSHIP CHECK
function checkOwnership(req, res, next) {

    // Logged-in user ki ID
    const loggedInUser = req.user.id;

    // Requested user ki ID
    const requestedUser = req.params.userId;

    // Dono IDs compare karo
    if (loggedInUser !== requestedUser) {

        return res.status(403).json({
            message: "You Cannot Access This Data"
        });

    }

    next();
}


// 4. EXPORT FUNCTIONS
module.exports = {
    adminOnly,
    userOnly,
    checkOwnership
};


// ==========================================
// END WEEK 4 — DAY 5
// ==========================================
