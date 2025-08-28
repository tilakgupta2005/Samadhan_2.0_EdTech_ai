const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


let students = [
  { id: 1, name: "Sameer", age: 20 },
  { id: 2, name: "Devendra", age: 21 },
  { id: 3, name: "Tilak", age: 19 }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.json({ message: "Student added successfully!", students });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
