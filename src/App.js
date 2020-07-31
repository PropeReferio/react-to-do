import React, { useState } from 'react';
import './App.css';
import v4 from 'uuid';

function App() {
  const [ tasks, setTasks ] = useState({list: ['Test task', 'other task', 'blah task']})
  const [ formVal, setFormVal ] = useState('');

  return (
    <>
      <h1>To Do List</h1>
      <br />
      <ol>
        {
          tasks.list.map(item => (
            <li key={v4()}>{item}</li>
          ))
        }
      </ol>
    </>
  );
}

export default App;
