import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className="App">
      <TodoList />
      <WeatherApp />
    </div>
  );
}

export default App;
