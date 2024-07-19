import React, { useReducer, useState } from 'react'
import tasksReducer from './functions/TasksReducer';

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  /* using state not ref because [TODO: add task suggestion later] */
  const [taskInput, setTaskInput] = useState("");

  function addTask() {
    dispatch({ type: 'add_task', text: taskInput })
    setTaskInput('');
  }

  return (
    <>
      <ul>
        {tasks.map(task =>
          <li key={task.id} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        )}
      </ul>
      <label>
        Add to-do task: <input name="task" value={taskInput} onChange={e => setTaskInput(e.target.value)} />
      </label>
      <button onClick={() => addTask()}>
        +
      </button>


    </>
  )
}
