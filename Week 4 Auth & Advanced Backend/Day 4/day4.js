
// ==========================================
// WEEK 4 — DAY 4
// AUTHENTICATION (BCRYPT + JWT)
// ==========================================

// 1. IMPORT PACKAGES
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 2. PASSWORD HASHING
async function hashPassword(password) {

    const hashedPassword = await bcrypt.hash(password, 10);

    return hashedPassword;
}

// 3. PASSWORD CHECK
async function checkPassword(password, hashedPassword) {

    const result = await bcrypt.compare(password, hashedPassword);

    return result;
}

// 4. CREATE JWT TOKEN
function createToken(userId) {

    const token = jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return token;
}

// 5. VERIFY JWT TOKEN
function verifyToken(token) {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded;
}

// 6. AUTH MIDDLEWARE
function authMiddleware(req, res, next) {

    try {

        const token = req.headers.authorization.split(" ")[1];

        const user = jwt.verify(token, process.env.JWT_SECRET);

        req.user = user;

        next();

    } catch (error) {

        res.status(401).json({
            message: "Invalid Token"
        });

    }
}

// 7. EXPORT FUNCTIONS
module.exports = {
    hashPassword,
    checkPassword,
    createToken,
    authMiddleware
};

// ==========================================
// END WEEK 4 — DAY 4
// ==========================================
