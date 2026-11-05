// ==================================================
// WEEK 3 — DAY 4: NODE.JS FUNDAMENTALS
// ==================================================

// 1. MODULE IMPORT / EXPORT
const getemploy = require("./employe");
console.log(getemploy());

// 2. OS MODULE
const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log("Total Memory:", os.totalmem());

// 3. FILE SYSTEM MODULE
const fs = require("fs");

// File create aur write karna
fs.writeFileSync("employees.txt", "Ali - IT Department");

// File read karna
const data = fs.readFileSync("employees.txt", "utf8");
console.log(data);

// Department file create karna
fs.writeFileSync(
    "departments.txt",
    "IT - Department, GD - Department"
);

// File mein mazeed data add karna
fs.appendFileSync("departments.txt", "\nHR Department");

// Updated file read karna
const data2 = fs.readFileSync("departments.txt", "utf8");
console.log(data2);

// Temporary employees file delete karna
fs.unlinkSync("employees.txt");

// Folders create karna
fs.mkdirSync("employees", { recursive: true });
fs.mkdirSync("department", { recursive: true });

// Folder ke andar files ki list lena
const files = fs.readdirSync("department");
console.log(files);

// 4. PATH MODULE
const path = require("path");

const filePath = path.join("employees", "employe.js");
console.log(filePath);

console.log(path.basename("employees/ali.txt"));
console.log(path.dirname("employees/ali.txt"));
console.log(path.extname("employees/ali.txt"));

const fullPath = path.resolve("employees", "ali.txt");
console.log(fullPath);

const filePath2 = path.join(__dirname, "employees", "ali.txt");
console.log(filePath2);

// 5. ENVIRONMENT VARIABLES
// .env file mein PORT=10000 rakho.
// dotenv ko project root ke .env se values load karne ke liye use karte hain.
require("dotenv").config();
const PORT = process.env.PORT;

// 6. NPM SCRIPTS & NODEMON
// package.json mein:
// "scripts": {
//   "start": "node app.js",
//   "dev": "nodemon app.js"
// }
//
// Nodemon install:
// npm install --save-dev nodemon
//
// Development server:
// npm run dev
//
// Note: Is file ko run karne par PORT variable load hota hai.
// Actual server app.js mein start hota hai.
