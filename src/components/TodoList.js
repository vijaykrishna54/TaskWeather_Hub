import React, { useState } from 'react';
import './component_styles/TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      {/* Apply a class to the container */}
      <h2>To-Do List</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="todo-input" // Apply a class to the input
      />
      <button onClick={addTodo} className="todo-button">
        {/* Apply a class to the button */}
        Add
      </button>
      <ul className="todo-list">
        {/* Apply a class to the list */}
        {todos.map((item, index) => (
          <li key={index} className="todo-item">
            {/* Apply a class to the list items */}
            {item}{' '}
            <button onClick={() => removeTodo(index)} className="remove-button">
              {/* Apply a class to the remove button */}
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
