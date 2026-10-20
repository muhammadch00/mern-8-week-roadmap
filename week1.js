let obtainedMarks = 480;
let totalMarks = 600;

const percentage = (obtainedMarks / totalMarks) * 100;
console.log(percentage);

let marks = 45;

console.log(marks > 45);
console.log(marks < 45);
console.log(marks === 45);



let Marks = 45;
let attendance = 80;

console.log(Marks >= 50 && attendance >= 75);


for (let i = 1; i <= 5; i++) {
    console.log("Student Number: " + i);
}

let number = 1;

while (number <= 3) {
    console.log(number);
    number++;
}

function calculatePercentage(marks, total) {
    return (marks / total) * 100;
}

console.log(calculatePercentage(450, 500));
console.log(calculatePercentage(360, 400));

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

function greet(name = "Student") {
    console.log("Welcome " + name);
}

function greeting(username = "User Name") {
    console.log("Welcome" + username);

}
greet("Ali");
greeting();

// function totalMarks(...marks) {
//     return marks.reduce((total, mark) => total + mark, 0);
// }

// console.log(totalMarks(70, 80, 90));

function test() {
    let message = "Hello";
    console.log(message);
}

test();
// console.log(message); // Error: function ke bahar accessible nahi

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

function double(number) {

    number = 2 * number;
    return number;

}
console.log(double(8));

let n = [70, 85, 90, 60];

console.log(n[0]); // 70
console.log(n[2]); // 90

let student = {
    name: "Ali",
    age: 18,
    marks: 85
};

console.log(student.name);  // Ali
console.log(student.marks); // 85

let doubled = n.map(function (n) {
    return n * 2;
});

console.log(doubled);

let passed = n.filter(function (n) {
    return n >= 50;
});

console.log(passed);



let total = n.reduce(function (sum, n) {
    return sum + n;
}, 0);

console.log(total); // 305


let firstPassed = n.find(function (n) {
    return n >= 50;
});

console.log(firstPassed); // 70


// Working on feature/student-manager branch