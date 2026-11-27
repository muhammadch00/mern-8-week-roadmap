
// ==========================================
// WEEK 4 — DAY 7
// MULTER 
// ==========================================

// 1. IMPORT MULTER
const multer = require("multer");


// 2. STORAGE CONFIGURATION
const storage = multer.diskStorage({

    // Upload folder
    destination: function (req, file, cb) {

        cb(null, "uploads/");

    },

    // File name
    filename: function (req, file, cb) {

        cb(null, Date.now() + "-" + file.originalname);

    }

});


// 3. FILE FILTER
function fileFilter(req, file, cb) {

    // Sirf images allow karo
    if (file.mimetype.startsWith("image/")) {

        cb(null, true);

    } else {

        cb(new Error("Only Images Allowed"), false);

    }

}


// 4. MULTER CONFIGURATION
const upload = multer({

    storage: storage,

    fileFilter: fileFilter,

    limits: {
        fileSize: 2 * 1024 * 1024
    }

});


// 5. EXPORT MULTER
module.exports = upload;


// ==========================================
// END WEEK 4 — DAY 7
// ==========================================
