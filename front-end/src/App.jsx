import React, { useEffect, useReducer, useState } from 'react'
import tasksReducer from './functions/TasksReducer';
import TasksBoard from './components/TasksBoard';
import InputArea from './components/InputArea';
import { getCategoriesFromStorage, getTasksFromStorage } from './functions/storageHandler';


export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, getTasksFromStorage());
  const [categories, setCategories] = useState(getCategoriesFromStorage);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <TasksBoard tasks={tasks} categories={categories} dispatch={dispatch} />
      <InputArea dispatch={dispatch} categories={categories} setCategories={setCategories} />
    </>
  )
}
