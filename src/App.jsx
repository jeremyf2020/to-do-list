import React, { createContext, useEffect, useReducer, useState } from 'react'
import tasksReducer from './functions/TasksReducer';
import TasksBoard from './components/TasksBoard';
import InputArea from './components/InputArea';
import { getCategoriesFromStorage, getTasksFromStorage } from './functions/storageHandler';
import CatergoryBar from './components/CatergoryBar';

export const CategoriesContext = createContext(null);

export default function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, getTasksFromStorage());
  const [categories, setCategories] = useState(getCategoriesFromStorage);
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  return (
    <CategoriesContext.Provider value={{ categories, setCategories }} >
      <div className='bg-orange-100 h-[700px] w-[760px] pt-2 flex flex-col'>
        <CatergoryBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} tasksDispatch={tasksDispatch} />
        <TasksBoard tasks={tasks} tasksDispatch={tasksDispatch} selectedCategory={selectedCategory} />
        <InputArea tasksDispatch={tasksDispatch} />
      </div>
    </CategoriesContext.Provider>
  )
}
