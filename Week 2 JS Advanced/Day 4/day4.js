
// WEEK 2 - DAY 4
// DOM and Events

const students = [
    { name: "Ali", marks: 85 },
    { name: "Ahmed", marks: 42 },
    { name: "Sara", marks: 92 },
    { name: "Ayesha", marks: 35 },
    { name: "Usman", marks: 67 }
];

if (typeof document !== "undefined") {

    const pageHeading = document.querySelector("#heading");
    const showButton = document.querySelector("#showBtn");
    const studentList = document.querySelector("#studentList");

    if (pageHeading && showButton && studentList) {

        pageHeading.textContent = "Student Manager";

        showButton.addEventListener("click", () => {

            studentList.textContent = "";

            students.forEach((student) => {

                const item = document.createElement("li");

                item.textContent =
                    student.name + " - " + student.marks;

                studentList.appendChild(item);
            });
        });
    }
}
