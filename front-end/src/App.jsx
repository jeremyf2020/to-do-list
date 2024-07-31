import React, { useEffect, useReducer, useState } from 'react'
import tasksReducer from './functions/TasksReducer';
import TasksBoard from './components/TasksBoard';
import InputArea from './components/InputArea';
import { getTasksFromStorage } from './functions/storageHandler';


export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, getTasksFromStorage());

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  return (
    <>
      <TasksBoard tasks={tasks} dispatch={dispatch} />
      <InputArea dispatch={dispatch} />
      <div>
        {JSON.stringify(tasks)}
      </div>

    </>
  )
}
