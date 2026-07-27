// ==============================
// Student Management System
// ==============================

const students = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

const freshStudents = () => JSON.parse(JSON.stringify(students));

// ------------------------------
// Task 1 - Add a Student (push)
// ------------------------------
console.log("\n=== Task 1: push ===");
let t1 = freshStudents();
t1.push({ id: 106, name: "Simran", marks: 91, course: "Java" });
console.log(t1);

// ------------------------------
// Task 2 - Remove Last Student (pop)
// ------------------------------
console.log("\n=== Task 2: pop ===");
let t2 = freshStudents();
let removedLast = t2.pop();
console.log("Removed:", removedLast);
console.log("Updated array:", t2);

// ------------------------------
// Task 3 - Add Student at Beginning (unshift)
// ------------------------------
console.log("\n=== Task 3: unshift ===");
let t3 = freshStudents();
t3.unshift({ id: 100, name: "Ankit", marks: 80, course: "Web" });
console.log(t3);

// ------------------------------
// Task 4 - Remove First Student (shift)
// ------------------------------
console.log("\n=== Task 4: shift ===");
let t4 = freshStudents();
let removedFirst = t4.shift();
console.log("Removed:", removedFirst);
console.log("Updated array:", t4);

// ------------------------------
// Task 5 - Update Array Using splice()
// ------------------------------
console.log("\n=== Task 5: splice ===");
let t5 = freshStudents();
let indexToReplace = t5.findIndex(s => s.id === 103);
t5.splice(indexToReplace, 1, { id: 107, name: "Karan", marks: 78, course: "Java" });
console.log(t5);

// ------------------------------
// Task 6 - Create a New Array Using slice()
// ------------------------------
console.log("\n=== Task 6: slice ===");
let t6 = freshStudents();
let firstThree = t6.slice(0, 3);
console.log(firstThree);

// ------------------------------
// Task 7 - Array Iteration (for...of)
// ------------------------------
console.log("\n=== Task 7: for...of ===");
let t7 = freshStudents();
for (const student of t7) {
  console.log(`${student.name} - ${student.course} - ${student.marks}`);
}

// ------------------------------
// Task 8 - forEach()
// ------------------------------
console.log("\n=== Task 8: forEach ===");
let t8 = freshStudents();
t8.forEach(student => console.log(student.name));

// ------------------------------
// Task 9 - map()
// ------------------------------
console.log("\n=== Task 9: map ===");
let t9 = freshStudents();
let names = t9.map(student => student.name);
console.log(names);

// ------------------------------
// Task 10 - filter()
// ------------------------------
console.log("\n=== Task 10: filter ===");
let t10 = freshStudents();
let highScorers = t10.filter(student => student.marks >= 80);
console.log(highScorers);

// ------------------------------
// Task 11 - reduce()
// ------------------------------
console.log("\n=== Task 11: reduce ===");
let t11 = freshStudents();
let totalMarks = t11.reduce((sum, student) => sum + student.marks, 0);
let averageMarks = totalMarks / t11.length;
console.log(`Total Marks = ${totalMarks}`);
console.log(`Average = ${averageMarks}`);

// ------------------------------
// Task 12 - sort()
// ------------------------------
console.log("\n=== Task 12: sort ===");

// Ascending
let t12Asc = freshStudents();
t12Asc.sort((a, b) => a.marks - b.marks);
console.log("Ascending:");
t12Asc.forEach(student => console.log(student.marks));

// Descending
let t12Desc = freshStudents();
t12Desc.sort((a, b) => b.marks - a.marks);
console.log("Descending:");
t12Desc.forEach(student => console.log(student.marks));