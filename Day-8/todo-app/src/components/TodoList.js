import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggle, onEdit }) {
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <h3>No tasks yet!</h3>
        <p>Add your first task above to get started.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {/* Active Todos Section */}
      {activeTodos.length > 0 && (
        <div className="todo-section">
          <h2 className="section-title">
            📋 Active Tasks ({activeTodos.length})
          </h2>
          <ul className="todo-items">
            {activeTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onToggle={onToggle}
                onEdit={onEdit}
              />
            ))}
          </ul>
        </div>
      )}

      {/* Completed Todos Section */}
      {completedTodos.length > 0 && (
        <div className="todo-section">
          <h2 className="section-title">
            ✅ Completed Tasks ({completedTodos.length})
          </h2>
          <ul className="todo-items completed-section">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onToggle={onToggle}
                onEdit={onEdit}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;