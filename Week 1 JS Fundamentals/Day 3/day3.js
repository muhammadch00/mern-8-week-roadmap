// ==========================================
// WEEK 1 - DAY 3
// Arrays, Array Methods and Objects
// ==========================================

// 1. Array

let marksList = [70, 85, 90, 60];

console.log(marksList[0]);
console.log(marksList[2]);


// 2. map() - Har mark ko double karo

let doubled = marksList.map(function (mark) {
    return mark * 2;
});

console.log(doubled);


// 3. filter() - Passing marks nikalo

let passed = marksList.filter(function (mark) {
    return mark >= 50;
});

console.log(passed);


// 4. reduce() - Total marks nikalo

let totalMarks = marksList.reduce(function (sum, mark) {
    return sum + mark;
}, 0);

console.log(totalMarks);


// 5. find() - Pehla passing mark

let firstPassed = marksList.find(function (mark) {
    return mark >= 50;
});

console.log(firstPassed);


// 6. Student Object

let student = {
    name: "Ali",
    age: 18,
    marks: 85
};

console.log(student.name);
console.log(student.marks);