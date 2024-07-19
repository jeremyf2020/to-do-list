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
          <li key={task.id}>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}
              onClick={() => dispatch({ type: 'toggle_task', id: task.id, done: task.done })}>
              {task.text}
            </span>
            <button>Edit</button>
            <button onClick={() => dispatch({ type: 'delete_task', id: task.id })}>Delete</button>
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
