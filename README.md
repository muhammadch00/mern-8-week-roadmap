
# MERN Stack Roadmap — Week 1 Report

**Student:** Muhammad Bin Abdul Mannan  
**Roadmap:** MERN Stack — 8-Week Roadmap  
**Week:** 1 — Core JavaScript + Tooling  
**Status:** Week 1 Practice Completed; Final Review Checklist Below

---

## 1. Week 1 Goals

Week 1 ka maqsad JavaScript ki core concepts revise karna, development tools set up karna, Git/GitHub workflow seekhna aur HTML/CSS ki basic understanding practice karna tha.

### Topics Covered

- Development environment setup
- Git and GitHub
- JavaScript variables and data types
- Operators and conditionals
- Loops
- Functions
- Arrays and objects
- Array methods
- Destructuring and spread operator
- Template literals
- Optional chaining and nullish coalescing
- HTML and CSS fundamentals
- Student Marks Manager project

---

## 2. Development Environment Setup

Development ke liye ye tools use kiye:

- Visual Studio Code
- Node.js
- npm
- Browser Developer Tools
- Git
- GitHub

### Version Check Commands

PowerShell ya VS Code terminal mein ye commands run ki:

```bash
node -v
npm -v
git --version
```

Versions check karne ka maqsad confirm karna tha ke tools properly install hain.

Reported versions:

- Node.js: `v24.21.0`
- npm: `11.19.0`
- Git: `2.56.0.windows.2`

**Project folder:**

`C:\Users\Lenovo\OneDrive\Desktop\8 week Road Map`

---

## 3. Git and GitHub

Git ek version control system hai jo code mein hone wali changes ka record rakhta hai.

GitHub ek online platform hai jahan repositories host aur share ki ja sakti hain.

### Important Git Concepts

- **Repository:** Project aur uski history store karti hai.
- **Working directory:** Jahan hum files edit karte hain.
- **Staging area:** Jahan commit ke liye changes select karte hain.
- **Commit:** Changes ka saved snapshot.
- **Branch:** Main code ko affect kiye baghair changes par kaam karne ka tareeqa.
- **Push:** Local commits ko remote repository par bhejna.
- **Pull:** Remote changes ko local repository mein lana.
- **Pull Request (PR):** Changes ko review aur merge karne ka process.
- **Merge:** Ek branch ke changes ko doosri branch mein combine karna.

### Commands Practiced

#### 1. Repository Initialize Karna

```bash
git init
```

Current project folder mein Git repository initialize karne ke liye.

#### 2. Repository Status Check Karna

```bash
git status
```

Is se pata chalta hai ke kaun si files modified, staged ya untracked hain.

#### 3. File Stage Karna

```bash
git add day1.js
```

`day1.js` ko staging area mein add kiya.

#### 4. Commit Karna

```bash
git commit -m "Update student practice"
```

Staged changes ka snapshot save karne ke liye.

Week 1 mein ye commits bhi banaye gaye:

- `24c2e6b` — Add Day 1 Javascript practice
- `aa95869` — Update student manager practice

#### 5. Branch Check Karna

```bash
git branch
```

Local branches dekhne ke liye.

#### 6. Feature Branch Banana

```bash
git switch -c feature/student-manager
```

Nayi branch create ki aur us par switch kiya.

#### 7. Remote Repository Check Karna

```bash
git remote -v
```

GitHub remote repository ke fetch aur push URLs check karne ke liye.

#### 8. Feature Branch Push Karna

```bash
git push -u origin feature/student-manager
```

Feature branch ko GitHub par push kiya.

#### 9. Main Branch Push Karna

```bash
git push -u origin master
```

Local `master` branch ko remote par push karne ke liye.

#### 10. Main Branch Par Wapas Aana

```bash
git switch master
```

`master` branch par switch kiya.

#### 11. GitHub Se Latest Changes Lena

```bash
git pull origin master
```

Remote `master` ke changes local branch mein laaye.

#### 12. Commit History Dekhna

```bash
git log --oneline --all --graph -5
```

Recent commits aur branches ka graphical history view karne ke liye.

### GitHub Workflow Completed

Humne ye workflow practice kiya:

1. Local repository initialize ki.
2. JavaScript file commit ki.
3. `feature/student-manager` branch banayi.
4. Changes commit aur push kiye.
5. GitHub par Pull Request create ki.
6. Pull Request merge ki.
7. Local `master` branch par switch kiya.
8. `git pull origin master` run kiya.
9. Commit history check ki.

Repository used:

https://github.com/muhammadchee/mern-8-week-roadmap

**Important:** Agar future mein Git push/pull issue aaye, to pehle `git remote -v` check karna.

---

## 4. JavaScript Variables

Variables data store karne ke liye use hote hain.

```javascript
let studentName = "Ali";
let studentAge = 18;

console.log(studentName);
console.log(studentAge);
```

### `let` aur `const`

- `let`: Jab variable ki value dobara assign karni ho.
- `const`: Jab variable ko dobara assign nahi karna ho.

Example:

```javascript
let marks = 70;
marks = 85;

const student = "Ali";

console.log(marks);
console.log(student);
```

`const` object ya array ke andar ki values ko automatically immutable nahi banata; lekin us variable ko kisi doosri object ya array se reassign nahi kar sakte.

---

## 5. JavaScript Data Types

Practice kiye gaye basic data types:

```javascript
let name = "Ali";       // String
let marks = 90;         // Number
let isPassed = true;    // Boolean
let address;            // Undefined
let result = null;      // Null
```

`typeof` operator se type check kar sakte hain:

```javascript
console.log(typeof name);
console.log(typeof marks);
console.log(typeof isPassed);
console.log(typeof address);
console.log(typeof result);
```

**Important:** JavaScript mein `typeof null` ka result `"object"` aata hai. Ye JavaScript ka purana behavior hai.

---

## 6. Operators and Percentage Calculation

Operators calculations aur comparisons ke liye use hote hain.

### Percentage Formula

Percentage = (Obtained Marks / Total Marks) × 100

```javascript
let obtainedMarks = 480;
let totalMarks = 600;

let percentage = (obtainedMarks / totalMarks) * 100;

console.log(percentage); // 80
```

### Comparison Operators

```javascript
let marks = 45;

console.log(marks > 45);   // false
console.log(marks < 45);   // false
console.log(marks === 45); // true
```

### Logical Operators

```javascript
let marks = 45;
let attendance = 80;

console.log(marks >= 50 && attendance >= 75);
// false
```

`&&` ka matlab hai dono conditions true honi chahiye.

---

## 7. If/Else Conditions

Conditions ki madad se program decision leta hai.

```javascript
let marks = 65;

if (marks >= 50) {
    console.log("Student Pass");
} else {
    console.log("Student Fail");
}
```

Real-life example: School system marks check karta hai. Agar marks 50 ya us se zyada hon to student pass, warna fail.

---

## 8. Loops

Loops kisi task ko baar baar perform karne ke liye use hote hain.

### For Loop

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Ye numbers 1 se 5 tak print karta hai.

### While Loop

```javascript
let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}
```

Ye numbers 1 se 3 tak print karta hai.

**Practice goal:** Loops ko use karke 1 se 10 tak numbers print karna.

---

## 9. Functions

Functions reusable code blocks hote hain.

### Function Declaration

```javascript
function double(number) {
    return number * 2;
}

console.log(double(8)); // 16
```

### Arrow Function

```javascript
const double = (number) => {
    return number * 2;
};

console.log(double(8));
```

### Default Parameters

Agar argument provide na kiya jaye to default value use hoti hai.

```javascript
function greet(name = "Student") {
    console.log(`Hello, ${name}`);
}

greet();
greet("Ali");
```

### Rest Parameters

Rest parameter multiple arguments ko array mein collect karta hai.

```javascript
function totalMarks(...marks) {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

console.log(totalMarks(70, 80, 90)); // 240
```

### Scope

Scope decide karta hai ke variable kahan accessible hai.

- Global scope
- Function scope
- Block scope

### Closure

Closure tab hota hai jab inner function apne outer function ke variables ko outer function complete hone ke baad bhi access kar sakta hai.

---

## 10. Arrays and Objects

### Array

Array multiple values ko ek variable mein store karta hai.

```javascript
const marks = [35, 80, 45, 90, 60];

console.log(marks[0]); // 35
console.log(marks[1]); // 80
```

Array indexing zero se start hoti hai.

### Object

Object related information ko key-value pairs mein store karta hai.

```javascript
const student = {
    name: "Ali",
    marks: 85
};

console.log(student.name);
console.log(student.marks);
```

Real-life example: Student object mein name, marks, class aur roll number store kiye ja sakte hain.

---

## 11. Array Methods

### `filter()`

Condition match karne wale tamam elements ka naya array return karta hai.

```javascript
const marks = [35, 80, 45, 90, 60];

const passed = marks.filter(mark => mark >= 50);

console.log(passed);
// [80, 90, 60]
```

### `map()`

Har element par operation perform karke naya array return karta hai.

```javascript
const marks = [10, 20, 30];

const doubled = marks.map(mark => mark * 2);

console.log(doubled);
// [20, 40, 60]
```

### `reduce()`

Array ki values ko combine karke ek final result nikalta hai.

```javascript
const marks = [70, 80, 90];

const total = marks.reduce((sum, mark) => sum + mark, 0);

console.log(total); // 240
```

### `find()`

Condition match karne wala pehla element return karta hai.

```javascript
const marks = [35, 80, 45, 90];

const firstPassed = marks.find(mark => mark >= 50);

console.log(firstPassed); // 80
```

**Difference:**

- `map()` — har element ko transform karta hai.
- `filter()` — matching elements select karta hai.
- `reduce()` — values ko ek result mein combine karta hai.
- `find()` — pehla matching element return karta hai.

---

## 12. Destructuring and Spread Operator

### Object Destructuring

```javascript
const student = {
    name: "Ali",
    marks: 85
};

const { name, marks } = student;

console.log(name);  // Ali
console.log(marks); // 85
```

Destructuring se object ki properties ko variables mein nikal sakte hain.

### Spread Operator

```javascript
const first = [10, 20];
const second = [...first, 30];

console.log(second);
// [10, 20, 30]
```

Spread operator array ke elements ko doosre array mein spread karta hai.

---

## 13. Modern JavaScript Features

### Template Literals

Backticks aur `${}` ki madad se string mein variables insert kar sakte hain.

```javascript
const name = "Ali";

console.log(`Hello, ${name}`);
// Hello, Ali
```

### Optional Chaining

Agar property maujood na ho to optional chaining error se bachati hai.

```javascript
const student = {
    name: "Ali"
};

console.log(student.address?.city);
// undefined
```

### Nullish Coalescing

`??` left side ki value `null` ya `undefined` ho to fallback value deta hai.

```javascript
const student = {
    name: "Ali"
};

console.log(student.address?.city ?? "Unknown");
// Unknown
```

Optional chaining aur nullish coalescing ko ek saath use karna practice kiya.

---

## 14. HTML and CSS Fundamentals

Week 1 roadmap mein basic HTML/CSS concepts bhi shamil the.

### HTML Topics

- HTML document structure
- Semantic HTML tags
- Headings and paragraphs
- Lists
- Tables
- Forms

### CSS Topics

- Selectors
- Classes and IDs
- Box model
- Flexbox
- Basic CSS Grid
- Responsive media queries
- Simple landing page from a design

### Important Concepts

**Semantic HTML:** Aise tags jo content ka meaning batate hain, jaise `header`, `nav`, `main`, `section`, `article` aur `footer`.

**CSS Box Model:** Har element ke content, padding, border aur margin ko samajhna.

**Flexbox:** Elements ko row ya column mein align karne aur spacing control karne ke liye.

**CSS Grid:** Rows aur columns mein two-dimensional layouts banane ke liye.

**Media Queries:** Screen size ke mutabiq responsive layout banane ke liye.

In topics ki final completion ko roadmap checklist ke mutabiq verify karna hai.

---

## 15. Week 1 Project — Student Marks Manager

Student Marks Manager ek practical project hai jisme JavaScript ki basic concepts ko combine karna tha.

### Technologies

- HTML
- CSS
- Vanilla JavaScript

### Files

- `index.html`
- `style.css`
- `script.js`

### Project Requirements

1. Student name input.
2. Obtained marks input; total marks 100.
3. Percentage calculate karna.
4. Grade assign karna.
5. Pass/Fail status show karna.
6. Results table mein multiple students show karna.
7. Missing name aur invalid marks validate karna.
8. Total students, pass students aur fail students ki summary.
9. Desktop aur mobile par responsive design.

### Grade Criteria

| Percentage | Grade | Status |
|---|---|---|
| 80–100 | A | Pass |
| 70–79 | B | Pass |
| 60–69 | C | Pass |
| 50–59 | D | Pass |
| 0–49 | F | Fail |

### Test Data

| Student | Marks | Grade | Status |
|---|---:|---|---|
| Ali | 90 | A | Pass |
| Sara | 75 | B | Pass |
| Ahmed | 60 | C | Pass |
| Usman | 45 | F | Fail |
| Ayesha | 0 | F | Fail |
| Bilal | 100 | A | Pass |

Project ke complete hone aur testing aur GitHub par push kiye jaane ki report di gayi hai. Source code ko dobara review karke validation aur responsive behavior confirm kiya ja sakta hai.

---

## 16. Git Commit History

Week 1 mein repository par ye commits record hue:

```text
24c2e6b Add Day 1 Javascript practice
aa95869 Update student manager practice
d535da6 Merge pull request #1 from muhammadchee/feature/student-manager
```

Final Git history mein `master` branch aur remote `origin/master` merge commit par aligned the.

---

## 17. Week 1 Revision Checklist

Is checklist ko final review ke waqt use karna hai.

### Development Tools

- [x] VS Code setup
- [x] Node.js version check
- [x] npm version check
- [x] Git version check
- [ ] Browser DevTools practice ko dobara verify karna

### Git and GitHub

- [x] Repository initialize karna
- [x] Changes stage aur commit karna
- [x] Feature branch banana
- [x] GitHub par branch push karna
- [x] Pull Request create aur merge karna
- [x] Pull karna aur commit history check karna

### JavaScript

- [x] Variables and data types
- [x] Operators and percentage calculation
- [x] If/else conditions
- [x] For and while loops
- [x] Functions and arrow functions
- [x] Default and rest parameters
- [x] Scope and closures
- [x] Arrays and objects
- [x] `map()`, `filter()`, `reduce()` and `find()`
- [x] Destructuring and spread operator
- [x] Template literals
- [x] Optional chaining
- [x] Nullish coalescing

### HTML and CSS

- [ ] HTML structure and semantic tags
- [ ] Lists, tables and forms
- [ ] CSS selectors, classes and IDs
- [ ] Box model
- [ ] Flexbox
- [ ] Basic Grid
- [ ] Responsive media queries
- [ ] Simple landing page from a design

### Project

- [x] Student Marks Manager project reportedly completed
- [x] Testing reportedly completed
- [x] GitHub push reportedly completed
- [ ] Final source-code review, if required

**Note:** Checked items practiced during Week 1 ko show karte hain. HTML/CSS aur DevTools ki unchecked items ko roadmap ke mutabiq verify karna baqi hai.

---

## 18. Important Commands Quick Reference

```bash
node -v
npm -v
git --version

git init
git status
git add day1.js
git commit -m "Update student practice"

git branch
git switch -c feature/student-manager
git remote -v

git push -u origin feature/student-manager
git push -u origin master

git switch master
git pull origin master
git log --oneline --all --graph -5
```

---

## 19. Week 1 Learning Summary

Week 1 mein JavaScript fundamentals aur Git/GitHub workflow par kaam kiya.

Main learning outcomes:

- Variables aur data types ka use.
- Operators aur conditions se decisions.
- Loops se repeated tasks.
- Functions se reusable code.
- Arrays aur objects mein data store karna.
- Array methods se data filter, transform aur combine karna.
- Modern JavaScript syntax ka use.
- Git branches, commits, push, pull aur Pull Requests ka workflow.
- Student Marks Manager jaisay practical project mein concepts apply karna.

---

## 20. Next Step — Week 2

Week 2 kal shuru karna hai.

Week 2 ke topics aur daily tasks original **MERN Stack — 8-Week Roadmap** se follow kiye jayenge.

- Roadmap ke topics skip nahi karne.
- Apni taraf se weekly curriculum change nahi karna.
- Har task ko simple explanation aur real-life example ke saath samajhna.
- Code khud likhna aur run karke test karna.
- Errors ko debug karna.
- Checkpoints aur weekly project roadmap ke mutabiq complete karna.

**Rule:** Week 2 start karne se pehle Week 1 ki remaining checklist verify karni hai. Us ke baad original roadmap ke mutabiq Week 2 par move karna hai.

---

**End of Week 1 Report**
