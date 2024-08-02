import React, { useContext, useEffect, useRef, useState } from 'react'
import OptionMenu from './OptionMenu';
import { CategoriesContext } from "../App";

export default function InputArea({ tasksDispatch }) {
    /* using state not ref because [TODO: add task suggestion later] */
    const [taskInput, setTaskInput] = useState("");
    const [showOptionMenu, setShowOptionMenu] = useState(false);
    const [showTimeError, setShowTimeError] = useState("");
    const { categories, setCategories } = useContext(CategoriesContext);


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
        return newUUID;
    }

    function addNewTask(newObj) {
        tasksDispatch({ type: 'add_task', object: newObj })
        setTaskInput('');
    }

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const formData = new FormData(e.target);

        // check the form is valid (time)
        if ((formData.get("endTime")) < formData.get("startTime")) {
            setShowTimeError("End time must be later than start time")
            return
        }

        // Add Task
        const categoryStr = formData.get("category") || "";
        const categoryId = addNewCategory(categoryStr);

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

            {showOptionMenu && <OptionMenu showTimeError={showTimeError} />}
        </form>
    )
}
