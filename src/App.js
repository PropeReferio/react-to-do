import React, { useState } from 'react';
import './App.css';
import v4 from 'uuid';

function App() {
  const [ tasks, setTasks ] = useState([{task: 'Learn Kubernetes',
                                         done: false},
                                         {task: 'Make Standing Desk',
                                         done: false},
                                         ])
  const [ formVal, setFormVal ] = useState('');

  const handleSubmit = e => {
    if (formVal) {
    e.preventDefault();
    setTasks([...tasks, {task: formVal, done: false}]);
    document.getElementById('form').reset();
    } else {
      e.target.value = '';
    }
    // Todo: clear form after submit
  };

  const handleChange = e => {
    setFormVal(e.target.value);
  }

  const handleClick = index => {
    // This is probably a good place to use useReducer
    let newTasks = [...tasks]
    newTasks[index] = { ...tasks[index], done: true }
    setTasks(newTasks);
  }

  return (
    <>
      <h1>To Do List</h1>
      <br />
      <p>Click a completed task to scratch it off</p>
      <ol>
        {
          tasks.map((item, index) => (
            <li key={index} 
                className={item.done ? 'done' : ''} 
                onClick={() => {handleClick(index)}}>
                  {item.task}
            </li>
          ))
        }
      </ol>
      <form onSubmit={handleSubmit} id='form'>
        <input type="text" placeholder='What to do?' onChange={handleChange}></input>
        <input type="submit" value='Add Task' />
      </form>
    </>
  );
}

export default App;
