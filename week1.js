
 // ==============================
 // WEEK 1 - DAY 1
 // Variables, Operators, Conditions, Loops
 // ==============================

// 1. Variables and Percentage
let marks = 480;
let total = 600;

let percentage = (marks / total) * 100;
console.log("Percentage:", percentage);

// 2. Comparison Operators
let score = 45;

console.log(score > 45);
console.log(score < 45);
console.log(score === 45);

// 3. Logical Operators
let studentMarks = 45;
let attendance = 80;

console.log(studentMarks >= 50 && attendance >= 75);

// 4. For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Student Number:", i);
}

// 5. While Loop
let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}


// ==============================
// WEEK 1 - DAY 2
// Functions and Scope
// ==============================

// 6. Calculate Percentage
function calculatePercentage(marks, total) {
    return (marks / total) * 100;
}

console.log(calculatePercentage(450, 500));
console.log(calculatePercentage(360, 400));

// 7. Arrow Function
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// 8. Default Parameters
function greet(name = "Student") {
    console.log("Welcome " + name);
}

greet("Ali");
greet();

// 9. Rest Parameters
function getTotal(...marks) {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

console.log(getTotal(70, 80, 90));

// 10. Function Scope
function test() {
    let message = "Hello";
    console.log(message);
}

test();

// message function ke bahar accessible nahi hai.

// 11. Closure
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const nextCount = counter();

console.log(nextCount()); // 1
console.log(nextCount()); // 2

// 12. Double a Number
function double(num) {
    return num * 2;
}

console.log(double(8));


// ==============================
// ARRAYS AND ARRAY METHODS
// ==============================

// 13. Array
let marksList = [70, 85, 90, 60];

console.log(marksList[0]);
console.log(marksList[2]);

// 14. map() - Har mark ko double karo
let doubled = marksList.map(function (mark) {
    return mark * 2;
});

console.log(doubled);

// 15. filter() - Passing marks nikalo
let passed = marksList.filter(function (mark) {
    return mark >= 50;
});

console.log(passed);

// 16. reduce() - Total marks nikalo
let totalMarks = marksList.reduce(function (sum, mark) {
    return sum + mark;
}, 0);

console.log(totalMarks);

// 17. find() - Pehla passing mark
let firstPassed = marksList.find(function (mark) {
    return mark >= 50;
});

console.log(firstPassed);


// ==============================
// OBJECTS
// ==============================

// 18. Student Object
let student = {
    name: "Ali",
    age: 18,
    marks: 85
};

console.log(student.name);
console.log(student.marks);


// ==============================
// GIT AND GITHUB
// ==============================

// Current branch:
// feature/student-manager

// Check current status
// git status

// Check current branch
// git branch

// Add changes
// git add .

// Save changes
// git commit -m "Update week 1 revision"

// Push current branch
// git push origin feature/student-manager

// Pull latest changes
// git pull origin master


// ==============================
// WEEK 1 COMPLETE
// ==============================

console.log("Week 1 Revision Complete!");
