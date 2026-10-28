
/*
========================================
WEEK 2 - ASYNC JAVASCRIPT + BROWSER
Revision Notes and Practice
========================================

Topics:
1. Synchronous JavaScript
2. setTimeout and Event Loop
3. Callback Functions
4. Promises
5. async/await and try/catch
6. Fetch and JSON
7. map, filter, reduce
8. DOM and Events
9. ES Modules
10. Classes and this
11. Error Handling and Debugging
12. Git and GitHub
*/


// ========================================
// TOPIC 1: SYNCHRONOUS JAVASCRIPT
// ========================================

// Code ek ke baad ek execute hota hai.

console.log("Student 1");
console.log("Student 2");
console.log("Student 3");

console.log("School Open");
console.log("Taking Attendance");
console.log("Class Started");


// ========================================
// TOPIC 2: setTimeout AND EVENT LOOP
// ========================================

// setTimeout callback ko baad mein execute karwata hai.

console.log("School Open");

setTimeout(() => {
    console.log("Principal Approval Received");
}, 2000);

console.log("Attendance Started");


// Example 2: Code ka execution order

console.log("1. Teacher Arrived");

setTimeout(() => {
    console.log("2. Class Started");
}, 1000);

console.log("3. Students Present");


// Example 3: Zero-millisecond timers

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");

// Expected order:
// 1
// 3
// 5
// 2
// 4


// ========================================
// TOPIC 3: CALLBACK FUNCTIONS
// ========================================

// Callback woh function hai jo doosre
// function ko argument ke taur par diya jata hai.

function admissionComplete() {
    console.log("Admission Complete!");
}

function processAdmission(callback) {
    console.log("Admission form is processing...");
    callback();
}

processAdmission(admissionComplete);


// Example 2: Pass ya Fail

function showPass() {
    console.log("Student Passed!");
}

function showFail() {
    console.log("Student Failed!");
}

function checkMarks(marks, onPass, onFail) {
    console.log("Checking marks...");

    if (marks >= 50) {
        onPass();
    } else {
        onFail();
    }
}

checkMarks(40, showPass, showFail);


// Example 3: Callback with a parameter

function greetStudent() {
    console.log("Assalam-o-Alaikum");
}

function runCallback(callback) {
    callback();
}

runCallback(greetStudent);


function validateStudent(studentName, callback) {
    if (studentName !== "") {
        callback(studentName);
    } else {
        console.log("Name required hai");
    }
}

validateStudent("Ali", function (name) {
    console.log(name + " ka form valid hai");
});


// ========================================
// TOPIC 4: PROMISES
// ========================================

// Promise ki states:
// Pending, Fulfilled, Rejected

// Example 1: Successful Promise

const admissionPromise = new Promise((resolve, reject) => {
    resolve("Admission Approved!");
});

admissionPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// Example 2: Rejected Promise

const marksPromise = new Promise((resolve, reject) => {
    reject("Marks load nahi ho sake!");
});

marksPromise
    .then((marks) => {
        console.log("Student Marks:", marks);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Marks operation complete");
    });


// Example 3: Promise microtask

console.log("Promise Example Start");

Promise.resolve("Promise completed").then((message) => {
    console.log(message);
});

console.log("Promise Example End");

// Expected order:
// Promise Example Start
// Promise Example End
// Promise completed


// ========================================
// TOPIC 5: ASYNC/AWAIT
// ========================================

// async function hamesha Promise return karta hai.

async function getStudentName() {
    return "Ali";
}

async function showStudentName() {
    const studentName = await getStudentName();
    console.log("Student Name:", studentName);
}

showStudentName();


// Example 2: async/await with try/catch

async function loadStudentData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Student data load nahi hua");
        }

        const studentData = await response.json();

        console.log("Student:", studentData.name);
        console.log("Email:", studentData.email);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

loadStudentData();


// ========================================
// TOPIC 6: ARRAY METHODS
// ========================================

const students = [
    { name: "Ali", marks: 85 },
    { name: "Ahmed", marks: 42 },
    { name: "Sara", marks: 92 },
    { name: "Ayesha", marks: 35 },
    { name: "Usman", marks: 67 }
];

console.log("All Students:", students);


// map() - Sirf students ke naam

const studentNames = students.map((student) => {
    return student.name;
});

console.log("Student Names:", studentNames);


// filter() - Passing students

const passedStudents = students.filter((student) => {
    return student.marks >= 50;
});

console.log("Passed Students:", passedStudents);


// reduce() - Total marks

const allMarksTotal = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

console.log("Total Marks:", allMarksTotal);


// find() - Pehla student jo pass hai

const firstPassedStudent = students.find((student) => {
    return student.marks >= 50;
});

console.log("First Passed Student:", firstPassedStudent);


// ========================================
// TOPIC 7: DOM AND EVENTS
// Browser mein run karne ke liye.
// HTML mein ye IDs honi chahiye:
// heading, showBtn, studentList
// ========================================

if (typeof document !== "undefined") {
    const pageHeading = document.querySelector("#heading");
    const showButton = document.querySelector("#showBtn");
    const studentList = document.querySelector("#studentList");

    // Check karo ke required elements mojood hain.

    if (pageHeading && showButton && studentList) {

        // Element ka text change karna

        pageHeading.textContent = "Student Manager";

        // Button click event

        showButton.addEventListener("click", () => {

            // Purani list clear karo

            studentList.textContent = "";

            // Har student ka list item banao

            students.forEach((student) => {
                const item = document.createElement("li");

                item.textContent =
                    student.name + " - " + student.marks;

                studentList.appendChild(item);
            });
        });
    }
}


// ========================================
// TOPIC 8: ES MODULES
// In examples ko alag files mein rakhna hai.
// In lines ko isi week2.js mein uncomment na karo.
// ========================================

/*

FILE: math.js

export function add(a, b) {
    return a + b;
}


FILE: app.js

import { add } from "./math.js";

console.log(add(10, 20));


HTML FILE:

<script type="module" src="app.js"></script>

Named export mein import ke waqt exported
name match karna hota hai.

*/


// ========================================
// TOPIC 9: CLASSES AND this
// ========================================

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    showResult() {
        if (this.marks >= 50) {
            console.log(this.name + " Passed");
        } else {
            console.log(this.name + " Failed");
        }
    }
}

const studentOne = new Student("Ali", 85);
const studentTwo = new Student("Ahmed", 42);

studentOne.showResult();
studentTwo.showResult();

// this.name aur this.marks us object ki
// properties hain jis par method call hota hai.


// ========================================
// TOPIC 10: ERROR HANDLING
// ========================================

try {
    const studentAge = 18;

    if (studentAge < 0) {
        throw new Error("Age negative nahi ho sakti");
    }

    console.log("Student Age:", studentAge);
} catch (error) {
    console.log("Problem:", error.message);
} finally {
    console.log("Age check complete");
}


// Example 2: Function mein validation

function calculatePercentage(marks, total) {
    if (total <= 0) {
        throw new Error("Total marks zero se zyada hone chahiye");
    }

    return (marks / total) * 100;
}

try {
    console.log(calculatePercentage(450, 500));
} catch (error) {
    console.log("Calculation Error:", error.message);
}


// ========================================
// TOPIC 11: DEBUGGING
// ========================================

/*

Debugging ka matlab code mein errors dhoondhna
aur unhein fix karna hai.

1. console.log() se values check karo.
2. VS Code mein code ke left side par click karke
   breakpoint lagao.
3. Debug mode mein code step-by-step chalao.
4. Variables aur Call Stack inspect karo.
5. Console mein error message parho.

Example:

const firstNumber = 10;
const secondNumber = 20;

const sum = firstNumber + secondNumber;

console.log("Sum:", sum);

Is code ki last do lines par breakpoint laga kar
variables inspect kar sakte ho.

*/


// ========================================
// TOPIC 12: GIT AND GITHUB
// ========================================

/*

Current branch:
feature/student-manager

Git status check karo:
git status

Current branch check karo:
git branch

Changes stage karo:
git add .

Commit banao:
git commit -m "Update week 2 revision"

Feature branch push karo:
git push origin feature/student-manager

Latest master changes lao:
git pull origin master

Note:
Agar tumhari local branch master se alag hai,
to merge/rebase karne se pehle branch status check karo.

*/


// ========================================
// WEEK 2 REVISION COMPLETE
// ========================================

console.log("Week 2 Revision Complete!");
