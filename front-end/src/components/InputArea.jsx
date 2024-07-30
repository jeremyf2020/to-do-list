import React, { useRef, useState } from 'react'




export default function InputArea({ dispatch }) {
    console.log('rendering InputArea')
    /* using state not ref because [TODO: add task suggestion later] */
    const [taskInput, setTaskInput] = useState("");
    const [focusing, setFocusing] = useState(false);
    const catergyInputRef = useRef(null);
    const [customChecked, setCustomChecked] = useState(false)

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

        // Clear the form
        setTaskInput('');
        setFocusing(false);
    }


    return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Add to-do task:
                <input onFocus={() => setFocusing(true)} name="newtask" value={taskInput} onChange={e => setTaskInput(e.target.value)} />
            </label>
            <button>+</button>

            {focusing && <>
                <div>
                    Categories:
                    <label><input type="radio" name="catergy" value="default" defaultChecked={true} />Default</label>
                    {" "}
                    <label><input type="radio" name="catergy" value="option2" /> Option 2</label>
                    <label><input type="radio" name="catergy" value="option3" /> Option 3</label>
                    <br />
                    <label><input type="radio" name="catergy"
                        checked={customChecked} onChange={() => { setCustomChecked(true) }}
                        value={catergyInputRef.current !== null && catergyInputRef.current.value} />Custom:
                        <input type="text" ref={catergyInputRef} onFocus={() => { setCustomChecked(true) }} />
                    </label>
                </div>
                <div>
                    <label>Start Time<input type="datetime-local" name="startTime" /> </label>
                    <br />
                    <label>End Time<input type="datetime-local" name="endTime" /> </label>
                </div>
            </>}
        </form>
    )
}
