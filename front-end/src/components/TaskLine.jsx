import React, { useRef, useState } from 'react'

export default function TaskLine({ task, dispatch }) {
    const [editing, setEditing] = useState(false);
    const taskContextRef = useRef(task.text)

    function handleEdit() {
        if (editing) {
            dispatch({ type: 'edit_task', id: task.id, text: taskContextRef.current.value });
        }
        setEditing(!editing);
    }
    return (
        <li>
            {editing ?
                <input type="text" defaultValue={task.text} ref={taskContextRef} /> :
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}
                    onClick={() => dispatch({ type: 'toggle_task', id: task.id, done: task.done })}>
                    {task.text}
                </span>
            }
            <button onClick={handleEdit}>{editing ? "Save" : "edit"}</button>
            <button onClick={() => dispatch({ type: 'delete_task', id: task.id })}>Delete</button>
        </li>
    )
}
