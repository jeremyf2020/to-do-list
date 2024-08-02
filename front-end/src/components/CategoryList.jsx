import React, { useState } from 'react'

export default function CategoryList({ title, tasks, categoryId }) {
    const [showList, setShowList] = useState(true)


    return (
        <>
            {
                title !== "none" &&
                <div>
                    <h2 >{title}</h2>
                    <button onClick={() => { setShowList(!showList) }}>{showList ? "Close" : "Expand"}</button>
                </div>
            }
            {showList &&
                <ul>
                    {tasks.map(task => {
                        if (task.category_id === categoryId) {
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
            }
        </>)
}
