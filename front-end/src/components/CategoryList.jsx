import React from 'react'

export default function CategoryList({ title, tasks, id }) {
    return (
        <>
            <h2 >{title}</h2>
            <ul>
                {tasks.map(task => {
                    if (task.category_id === id) {
                        return (
                            <li key={task.id}>
                                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}
                                    onClick={() => dispatch({ type: 'toggle_task', id: task.id, done: task.done })}>
                                    {task.text}
                                </span>
                                <button>Edit</button>
                                <button onClick={() => dispatch({ type: 'delete_task', id: task.id })}>Delete</button>
                            </li>
                        )
                    }
                }
                )}
            </ul>
        </>)
}
