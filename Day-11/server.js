const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for students
let students = [
  { id: 1, name: 'Alice Johnson', age: 20, email: 'alice@example.com', course: 'Computer Science' },
  { id: 2, name: 'Bob Smith', age: 22, email: 'bob@example.com', course: 'Mathematics' },
  { id: 3, name: 'Carol Davis', age: 19, email: 'carol@example.com', course: 'Physics' }
];

// Helper function to find student by ID
const findStudentById = (id) => {
  return students.find(student => student.id === parseInt(id));
};

// Helper function to generate new ID
const generateId = () => {
  return students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
};

// GET /api/students - Get all students
app.get('/api/students', (req, res) => {
  res.json({
    success: true,
    data: students,
    count: students.length
  });
});

// GET /api/students/:id - Get a specific student by ID
app.get('/api/students/:id', (req, res) => {
  const student = findStudentById(req.params.id);
  
  if (!student) {
    return res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }
  
  res.json({
    success: true,
    data: student
  });
});

// POST /api/students - Create a new student
app.post('/api/students', (req, res) => {
  const { name, age, email, course } = req.body;
  
  // Validation
  if (!name || !age || !email || !course) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, age, email, course) are required'
    });
  }
  
  // Check if email already exists
  const existingStudent = students.find(s => s.email === email);
  if (existingStudent) {
    return res.status(400).json({
      success: false,
      message: 'Student with this email already exists'
    });
  }
  
  const newStudent = {
    id: generateId(),
    name,
    age: parseInt(age),
    email,
    course
  };
  
  students.push(newStudent);
  
  res.status(201).json({
    success: true,
    message: 'Student created successfully',
    data: newStudent
  });
});

// PUT /api/students/:id - Update an existing student
app.put('/api/students/:id', (req, res) => {
  const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
  
  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }
  
  const { name, age, email, course } = req.body;
  
  // Validation
  if (!name || !age || !email || !course) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, age, email, course) are required'
    });
  }
  
  // Check if email already exists (excluding current student)
  const existingStudent = students.find(s => s.email === email && s.id !== parseInt(req.params.id));
  if (existingStudent) {
    return res.status(400).json({
      success: false,
      message: 'Another student with this email already exists'
    });
  }
  
  // Update student
  students[studentIndex] = {
    id: parseInt(req.params.id),
    name,
    age: parseInt(age),
    email,
    course
  };
  
  res.json({
    success: true,
    message: 'Student updated successfully',
    data: students[studentIndex]
  });
});

// DELETE /api/students/:id - Delete a student
app.delete('/api/students/:id', (req, res) => {
  const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
  
  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Student not found'
    });
  }
  
  const deletedStudent = students[studentIndex];
  students.splice(studentIndex, 1);
  
  res.json({
    success: true,
    message: 'Student deleted successfully',
    data: deletedStudent
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Serve static HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('\nAvailable endpoints:');
  console.log('GET    /api/students     - Get all students');
  console.log('GET    /api/students/:id - Get student by ID');
  console.log('POST   /api/students     - Create new student');
  console.log('PUT    /api/students/:id - Update student');
  console.log('DELETE /api/students/:id - Delete student');
});

module.exports = app;