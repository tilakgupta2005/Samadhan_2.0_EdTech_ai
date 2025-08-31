import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editText.trim() === '') return;
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`checkbox ${todo.completed ? 'checked' : ''}`}
        >
          {todo.completed ? '✓' : ''}
        </button>

        {/* Todo Text or Edit Input */}
        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              value={editText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="edit-input"
              autoFocus
            />
            <div className="edit-actions">
              <button onClick={handleSave} className="save-btn">💾</button>
              <button onClick={handleCancel} className="cancel-btn">❌</button>
            </div>
          </div>
        ) : (
          <div className="view-mode">
            <span className="todo-text">{todo.text}</span>
            <div className="todo-actions">
              <button onClick={handleEdit} className="edit-btn">✏️</button>
              <button onClick={() => onDelete(todo.id)} className="delete-btn">🗑️</button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default TodoItem;