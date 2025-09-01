const express = require("express");
const cors = require("cors");
const students = require("./data/students.json");

const app = express();
app.use(cors());
app.use(express.json());

// API route
app.get("/api/students", (req, res) => {
  res.json(students);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
