
// WEEK 2 - DAY 2

// 1. Promises

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


// Example 3: Promise Microtask

console.log("Promise Example Start");

Promise.resolve("Promise completed").then((message) => {
    console.log(message);
});

console.log("Promise Example End");


// 2. Async/Await

async function getStudentName() {
    return "Ali";
}

async function showStudentName() {
    const studentName = await getStudentName();
    console.log("Student Name:", studentName);
}

showStudentName();


// 3. Async/Await with Try/Catch

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


// 4. Error Handling

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


// Example 2: Function Validation

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
