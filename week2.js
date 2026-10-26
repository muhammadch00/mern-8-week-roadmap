
console.log("Student 1");
console.log("Student 2");
console.log("Student 3");


console.log("School Open");

console.log("Taking Attendance");

console.log("Class Started");


console.log("School Open");

setTimeout(() => {
    console.log("Principal Approval Received");
}, 2000);

console.log("Attendance Started");

console.log("1. Teacher Arrived");

setTimeout(() => {
    console.log("2. Class Started");
}, 1000);

console.log("3. Students Present");

function admissionComplete() {
    console.log("Admission Complete!");
}

function processAdmission(callback) {
    console.log("Admission form is processing...");
    callback();
}

processAdmission(admissionComplete);


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

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");


const admissionPromise = new Promise((resolve, reject) => {
    resolve("Admission Approved!");
});

admissionPromise.then((result) => {
    console.log(result);
});

const marksPromise = new Promise((resolve, reject) => {
    reject("Marks load nahi ho sake!");
});

marksPromise
    .then((marks) => {
        console.log("Student Marks:", marks);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

    function greet() {
  console.log("Assalam-o-Alaikum");
}

function process(callback) {
  callback();
}

process(greet);

function validateStudent(name, callback) {
  if (name !== "") {
    callback(name);
  } else {
    console.log("Name required hai");
  }
}

validateStudent("Ali", function (studentName) {
  console.log(studentName + " ka form valid hai");
});


async function getStudent() {
    return "Ali";
}

async function showStudent() {
    let student = await getStudent();
    console.log(student);
}

showStudent();


async function getStudent() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        let student = await response.json();

        console.log(student.name);
    } catch (error) {
        console.log("Data load nahi hua:", error.message);
    }
}

getStudent();