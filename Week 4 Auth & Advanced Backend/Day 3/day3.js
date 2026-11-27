
// ==================================================
// WEEK 4 — DAY 3
// FILTERING, SORTING, PAGINATION & INDEXES
// ==================================================


// 1. IMPORT MONGOOSE

const mongoose = require("mongoose");


// 2. IMPORT EMPLOYEE MODEL

const Employee = require("./models/Employee");


// ==================================================
// 3. FILTERING
// ==================================================

// Filtering ka matlab hai apni requirement ke mutabiq
// database se specific records find karna.

// Sirf IT department ke employees find karo.

// find() database se matching employees return karta hai.
// department field ki value IT honi chahiye.

const itEmployees = await Employee.find({
    department: "IT"
});


// ==================================================
// 4. SALARY FILTERING
// ==================================================

// Sirf un employees ko find karo
// jinki salary 50000 se zyada hai.

// $gt ka matlab Greater Than hota hai.
// Yani salary 50000 se bari honi chahiye.

const highSalaryEmployees = await Employee.find({
    salary: {
        $gt: 50000
    }
});


// ==================================================
// 5. SORTING
// ==================================================

// Sorting ka matlab data ko kisi order mein arrange karna.

// Employees ko salary ke ascending order mein arrange karo.

// 1 ka matlab Ascending Order hota hai.
// Choti salary pehle aur bari salary baad mein.

const ascendingEmployees = await Employee.find()
    .sort({
        salary: 1
    });


// ==================================================
// 6. DESCENDING SORTING
// ==================================================

// Employees ko salary ke descending order mein arrange karo.

// -1 ka matlab Descending Order hota hai.
// Bari salary pehle aur choti salary baad mein.

const descendingEmployees = await Employee.find()
    .sort({
        salary: -1
    });


// ==================================================
// 7. PAGINATION
// ==================================================

// Pagination ka matlab data ko multiple pages mein divide karna.

// skip() batata hai kitne records skip karne hain.
// limit() batata hai maximum kitne records show karne hain.

// First Page:
// 0 records skip honge.
// Sirf 10 employees show honge.

const firstPage = await Employee.find()
    .skip(0)
    .limit(10);


// ==================================================
// 8. SECOND PAGE
// ==================================================

// Second Page:
// Pehle 10 employees skip honge.
// Uske baad next 10 employees show honge.

// skip(10) = Pehle 10 records skip.
// limit(10) = Next 10 records show.

const secondPage = await Employee.find()
    .skip(10)
    .limit(10);


// ==================================================
// 9. INDEX
// ==================================================

// Index database mein searching ko fast karne mein help karta hai.

// Email field par index create kar rahe hain.
// Is se email ke through searching efficient ho sakti hai.

// 1 ka matlab ascending index.

employeeSchema.index({
    email: 1
});


// ==================================================
// 10. EXPORT EMPLOYEE MODEL
// ==================================================

// Employee Model ko doosri files mein use karne ke liye export karo.

// Note:
// employeeSchema ko apne Employee.js model mein define karna hai.
// Index wala code Employee.js mein schema define hone ke baad
// aur mongoose.model() se pehle likhna hai.

module.exports = Employee;


// ==================================================
// END OF WEEK 4 — DAY 3
// ==================================================
