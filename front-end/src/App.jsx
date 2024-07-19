import React, { useState } from 'react'

export default function App() {
  const [tasks, setTask] = useState([]);
  /* using state not ref because [TODO: add task suggestion later] */
  const [taskInput, setTaskInput] = useState("");

  return (
    <>
      <ul>
        {tasks.map(task =>
          <li key={crypto.randomUUID()}>{task}</li>
        )}
      </ul>
      <label>
        Add to-do task: <input name="task" value={taskInput} onChange={e => setTaskInput(e.target.value)} />
      </label>
      <button onClick={() => setTask(prev => [...prev, taskInput])}>
        +
      </button>


    </>
  )
}
