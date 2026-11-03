
// 1. JavaScript Data Types

let studentName = "Ali";       // String
let age = 20;                  // Number
let isPassed = true;           // Boolean
let marks1;                     // Undefined
let result = null;             // Null

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof isPassed);
console.log(typeof marks1);


// 2. If / Else Condition

let percentage = 75;

if (percentage >= 80) {
    console.log("Grade A");
} else if (percentage >= 70) {
    console.log("Grade B");
} else if (percentage >= 60) {
    console.log("Grade C");
} else {
    console.log("You need improvement");
}


// 3. Switch Statement

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}


// 4. Template Literals

let name = "Ali";
let marks = 450;

console.log(`Student ${name} got ${marks} marks.`);


// 5. Destructuring — Array

let subjects = ["English", "Math", "Computer"];

let [subject1, subject2, subject3] = subjects;

console.log(subject1);
console.log(subject2);
console.log(subject3);


// 6. Destructuring — Object

let student = {
    name: "Ahmed",
    age: 21,
    city: "Lahore"
};

let { name: studentName2, age: studentAge } = student;

console.log(studentName2);
console.log(studentAge);


// 7. Spread Operator

let classA = ["Ali", "Ahmed"];
let classB = ["Sara", "Ayesha"];

let allStudents = [...classA, ...classB];

console.log(allStudents);


// 8. Optional Chaining

let school = {
    name: "ABC School",
    address: {
        city: "Lahore"
    }
};

console.log(school.address?.city);
console.log(school.contact?.phone);


// 9. Nullish Coalescing

let studentAge2 = null;

let finalAge = studentAge2 ?? 18;

console.log(finalAge);
