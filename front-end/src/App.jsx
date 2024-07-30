import React, { useReducer, useState } from 'react'
import tasksReducer from './functions/TasksReducer';
import TasksBoard from './components/TasksBoard';
import InputArea from './components/InputArea';


export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <TasksBoard tasks={tasks} dispatch={dispatch} />
      <InputArea dispatch={dispatch} />
    </>
  )
}
