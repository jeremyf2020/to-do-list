import React, { useState } from 'react'

export default function InputArea({ dispatch }) {
    const [taskInput, setTaskInput] = useState("");

    return (
        <>
            <label>
                Add to-do task: <input name="task" value={taskInput} onChange={e => setTaskInput(e.target.value)} />
            </label>
            <button onClick={() => {
                dispatch({ type: 'add_task', text: taskInput })
                setTaskInput('');
            }}>
                +
            </button>

        </>
    )
}
