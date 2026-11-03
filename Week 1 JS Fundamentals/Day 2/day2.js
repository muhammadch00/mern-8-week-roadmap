// ==========================================
// WEEK 1 - DAY 2
// Functions and Scope
// ==========================================

// 1. Calculate Percentage

function calculatePercentage(marks, total) {
    return (marks / total) * 100;
}

console.log(calculatePercentage(450, 500));
console.log(calculatePercentage(360, 400));


// 2. Arrow Function

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// 3. Default Parameters

function greet(name = "Student") {
    console.log("Welcome " + name);
}

greet("Ali");
greet();


// 4. Rest Parameters

function getTotal(...marks) {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

console.log(getTotal(70, 80, 90));


// 5. Function Scope

function test() {
    let message = "Hello";
    console.log(message);
}

test();

// message function ke bahar accessible nahi hai.


// 6. Closure

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


// 7. Double a Number

function double(num) {
    return num * 2;
}

console.log(double(8));