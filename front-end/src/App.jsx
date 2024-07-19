import React, { useReducer, useState } from 'react'
import tasksReducer from './functions/TasksReducer';
import TasksBoard from './components/TasksBoard';
import InputArea from './components/InputArea';


export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  /* using state not ref because [TODO: add task suggestion later] */

  return (
    <>
      <TasksBoard tasks={tasks} dispatch={dispatch} />
      <InputArea dispatch={dispatch} />
    </>
  )
}
