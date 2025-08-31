import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Practice event handling', completed: true }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>My Todo App</h1>
          <p>Stay organized and get things done!</p>
        </header>

        <AddTodo onAdd={addTodo} />

        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">{todos.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-item">
            <span className="stat-number active">{activeTodos.length}</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat-item">
            <span className="stat-number completed">{completedTodos.length}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
          onEdit={editTodo}
        />

        {completedTodos.length > 0 && (
          <div className="clear-completed">
            <button onClick={clearCompleted} className="clear-btn">
              Clear Completed ({completedTodos.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;