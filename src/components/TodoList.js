import React, { useState } from 'react';

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
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
