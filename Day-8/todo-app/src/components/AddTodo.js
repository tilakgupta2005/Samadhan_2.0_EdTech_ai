import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    onAdd(inputValue);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="add-todo">
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button 
          onClick={handleSubmit}
          className="add-btn"
          disabled={inputValue.trim() === ''}
        >
          ➕ Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTodo;