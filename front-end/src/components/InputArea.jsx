import React, { useEffect, useRef, useState } from 'react'
import OptionMenu from './OptionMenu';
import { handleSubmit } from '../functions/newTaskFormSubmit'
import { getCategoriesFromStorage } from '../functions/storageHandler';



export default function InputArea({ dispatch }) {
    // console.log('rendering InputArea')
    /* using state not ref because [TODO: add task suggestion later] */
    const [taskInput, setTaskInput] = useState("");
    const [showOptionMenu, setShowOptionMenu] = useState(false);
    const [categories, setCategories] = useState(getCategoriesFromStorage);

    // useEffect(() => {
    //     const categoryId = addNewCategory("test");
    // }, [])
    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories))
    }, [categories])

    function addNewCategory(newStr) {
        // Check the existing categories to ensure each one is unique
        for (const property in categories) {
            if (property.toLowerCase() === newStr.toLowerCase()) {
                return (categories[newStr])
            }
        }
        // Add a new category if no duplicate
        const newUUID = crypto.randomUUID();
        setCategories({ ...categories, [newStr]: newUUID });
        console.log(categories)
        return newUUID;
    }

    function addNewTask(newObj) {

        dispatch({ type: 'add_task', object: newObj })
        setTaskInput('');

    }

    // function addTask(text) {
    //     dispatch({ type: 'add_task', text: text })
    //     setTaskInput('');
    // }

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const formData = new FormData(e.target);

        // Add Task
        const categoryId = addNewCategory(formData.get("category"));
        addNewTask({
            id: crypto.randomUUID(),
            text: formData.get("newTask"),
            category_id: categoryId,
            time_create: new Date(Date.now()).toUTCString(),
            expectedTime_start: formData.get("startTime"),
            expectedTime_end: formData.get("endTime"),
        })

        // Clear the form
        setTaskInput('');
        setShowOptionMenu(false);
    }


    return (
        <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <label>
                Add to-do task:
                <input onFocus={() => setShowOptionMenu(true)} name="newTask" value={taskInput} onChange={e => setTaskInput(e.target.value)} />
            </label>
            <button>+</button>
            <div>
                {JSON.stringify(categories)}
            </div>

            {showOptionMenu && <OptionMenu />}
        </form>
    )
}
