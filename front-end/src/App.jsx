import React, { createContext, useEffect, useReducer, useState } from 'react'
import tasksReducer from './functions/TasksReducer';
import TasksBoard from './components/TasksBoard';
import InputArea from './components/InputArea';
import { getCategoriesFromStorage, getTasksFromStorage } from './functions/storageHandler';

export const CategoriesContext = createContext(null);

export default function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, getTasksFromStorage());
  const [categories, setCategories] = useState(getCategoriesFromStorage);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      <TasksBoard tasks={tasks} tasksDispatch={tasksDispatch} />
      <InputArea tasksDispatch={tasksDispatch} />
    </CategoriesContext.Provider>
  )
}
