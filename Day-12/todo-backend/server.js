const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: "Learn React", done: false },
  { id: 2, task: "Build To-Do App", done: false }
];

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// ADD new todo
app.post("/todos", (req, res) => {
  const newTodo = { id: Date.now(), task: req.body.task, done: false };
  todos.push(newTodo);
  res.json(newTodo);
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
