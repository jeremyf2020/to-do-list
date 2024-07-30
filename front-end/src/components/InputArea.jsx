import React, { useRef, useState } from 'react'
import OptionMenu from './OptionMenu';




export default function InputArea({ dispatch }) {
    console.log('rendering InputArea')
    /* using state not ref because [TODO: add task suggestion later] */
    const [taskInput, setTaskInput] = useState("");
    const [showOptionMenu, setShowOptionMenu] = useState(false);

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
        console.log(formJson.category)

        console.log(formJson)

        // Clear the form
        setTaskInput('');
        setShowOptionMenu(false);
    }


    return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Add to-do task:
                <input onFocus={() => setShowOptionMenu(true)} name="newtask" value={taskInput} onChange={e => setTaskInput(e.target.value)} />
            </label>
            <button>+</button>

            {showOptionMenu && <OptionMenu />}
        </form>
    )
}
