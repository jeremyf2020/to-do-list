import React, { useRef, useState } from 'react'

export default function TaskLine({ task, tasksDispatch }) {
    const [editing, setEditing] = useState(false);
    const taskContextRef = useRef(task.text)

    function handleEdit() {
        if (editing) {
            tasksDispatch({ type: 'edit_task', id: task.id, text: taskContextRef.current.value });
        }
        setEditing(!editing);
    }
    return (
        <li>
            {editing ?
                <input type="text" defaultValue={task.text} ref={taskContextRef} /> :
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}
                    onClick={() => tasksDispatch({ type: 'toggle_task', id: task.id, done: task.done })}>
                    {task.text}
                </span>
            }
            <button onClick={handleEdit}>{editing ? "Save" : "edit"}</button>
            <button onClick={() => tasksDispatch({ type: 'delete_task', id: task.id })}>Delete</button>
        </li>
    )
}
