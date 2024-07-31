import React, { useEffect, useRef, useState } from 'react'
import OptionMenu from './OptionMenu';
import { handleSubmit } from '../functions/newTaskFormSubmit'



export default function InputArea({ dispatch }) {
    // console.log('rendering InputArea')
    /* using state not ref because [TODO: add task suggestion later] */
    const [taskInput, setTaskInput] = useState("");
    const [showOptionMenu, setShowOptionMenu] = useState(false);
    const [categories, setCategories] = useState(() => {
        const savedCategories = localStorage.getItem('categories');
        return savedCategories ? new Object(JSON.parse(savedCategories)) : { "none": crypto.randomUUID() };
    });

    // console.log(categoriesObj)
    useEffect(() => {
        const categoryId = addNewCategory("test");
        console.log(categoryId)

    }, [])

    function addNewCategory(newStr) {
        // Check the existing categories to ensure each one is unique
        for (const property in categories) {
            if (property === newStr) {
                return (categories[newStr])
            }
        }
        const newUUID = crypto.randomUUID();
        setCategories({ ...categories, [newStr]: newUUID });
        return newUUID;
    }

    function addTask(text) {
        dispatch({ type: 'add_task', text: text })
        setTaskInput('');
    }

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // Add Task
        console.log(formJson)
        console.log(formJson.category)
        const categoryId = addNewCategory(formJson.category);


        // Clear the form
        setTaskInput('');
        setShowOptionMenu(false);
    }


    return (
        <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <label>
                Add to-do task:
                <input onFocus={() => setShowOptionMenu(true)} name="newtask" value={taskInput} onChange={e => setTaskInput(e.target.value)} />
            </label>
            <button>+</button>

            {showOptionMenu && <OptionMenu />}
        </form>
    )
}
