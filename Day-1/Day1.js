// Student object
const student = {
  name: "Sameer Gupta",
  age: 21,
  rollNo: "BTECH2025",
  branch: "CSE",
  college: "SISTec",
  grades: {
    maths: 95,
    dsa: 89,
    os: 92
  }
};

// Function to print student details
function printStudentDetails(student) {
  const { name, age, rollNo, branch, college, grades } = student;

  console.log("🎓 Student Details");
  console.log("----------------------------");
  console.log(`📛 Name     : ${name}`);
  console.log(`🎂 Age      : ${age}`);
  console.log(`🆔 Roll No  : ${rollNo}`);
  console.log(`💻 Branch   : ${branch}`);
  console.log(`🏫 College  : ${college}`);

  console.log("\n📊 Grades:");
  console.table(grades);
}

printStudentDetails(student);

// Array of multiple students
const students = [
  student,
  { name: "Aarav", age: 22, rollNo: "BTECH2026", branch: "AI", college: "IIT Delhi", grades: { maths: 90, dsa: 85, os: 88 } },
  { name: "Priya", age: 20, rollNo: "BTECH2027", branch: "IT", college: "NIT Bhopal", grades: { maths: 92, dsa: 91, os: 95 } }
];

console.log("\n📋 Multiple Students Overview:");
console.table(students.map(({ name, age, rollNo, branch }) => ({ name, age, rollNo, branch })));
