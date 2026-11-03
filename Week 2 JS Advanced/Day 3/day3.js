
// WEEK 2 - DAY 3

// 1. Fetch API and JSON

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


// 2. Array Methods

const students = [
    { name: "Ali", marks: 85 },
    { name: "Ahmed", marks: 42 },
    { name: "Sara", marks: 92 },
    { name: "Ayesha", marks: 35 },
    { name: "Usman", marks: 67 }
];

console.log("All Students:", students);


// map() - Student Names

const studentNames = students.map((student) => {
    return student.name;
});

console.log("Student Names:", studentNames);


// filter() - Passing Students

const passedStudents = students.filter((student) => {
    return student.marks >= 50;
});

console.log("Passed Students:", passedStudents);


// reduce() - Total Marks

const allMarksTotal = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

console.log("Total Marks:", allMarksTotal);


// find() - First Passing Student

const firstPassedStudent = students.find((student) => {
    return student.marks >= 50;
});

console.log("First Passed Student:", firstPassedStudent);
