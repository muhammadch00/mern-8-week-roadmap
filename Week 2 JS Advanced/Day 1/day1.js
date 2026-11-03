
/*
WEEK 2 - DAY 1
Synchronous JavaScript, setTimeout,
Event Loop and Callback Functions
*/

// 1. Synchronous JavaScript

console.log("Student 1");
console.log("Student 2");
console.log("Student 3");

console.log("School Open");
console.log("Taking Attendance");
console.log("Class Started");


// 2. setTimeout and Event Loop

console.log("School Open");

setTimeout(() => {
    console.log("Principal Approval Received");
}, 2000);

console.log("Attendance Started");


// Example 2

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


// 3. Callback Functions

function admissionComplete() {
    console.log("Admission Complete!");
}

function processAdmission(callback) {
    console.log("Admission form is processing...");
    callback();
}

processAdmission(admissionComplete);


// Example 2: Pass or Fail

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


// Example 3: Callback with parameter

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
