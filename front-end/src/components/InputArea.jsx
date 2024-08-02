import React, { useEffect, useRef, useState } from 'react'
import OptionMenu from './OptionMenu';
import { handleSubmit } from '../functions/newTaskFormSubmit'



export default function InputArea({ dispatch, categories, setCategories }) {
    // console.log('rendering InputArea')
    /* using state not ref because [TODO: add task suggestion later] */
    const [taskInput, setTaskInput] = useState("");
    const [showOptionMenu, setShowOptionMenu] = useState(false);
    const [showTimeError, setShowTimeError] = useState("");

    // useEffect(() => {
    //     const categoryId = addNewCategory("test");
    // }, [])
    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories))
    }, [categories])



    function addNewCategory(newStr) {
        // Check the input is valid
        if (newStr === "" || newStr === "") {
            return (categories["none"])
        }
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
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson)
        // console.log(formData.get("category"))


        // Add Task
        const categoryStr = formData.get("category") || "";
        const categoryId = addNewCategory(categoryStr);

        if ((formData.get("endTime")) < formData.get("startTime")) {
            setShowTimeError("End time must be later than start time")
            return
        }
        addNewTask({
            id: crypto.randomUUID(),
            text: formData.get("newTask"),
            done: false,
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

            {showOptionMenu && <OptionMenu showTimeError={showTimeError} />}
        </form>
    )
}
