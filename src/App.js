import './App.css';
import React from 'react';
import TodoInput from './compo/todoInput';
import TodoList from './compo/todoList';

function App() {
  return (
    <div className="App">
      <div className='appcontainer'>
        <TodoInput/>
        <div className='apptodocontainer'>
        <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
