import React, { useState } from 'react'
import TaskLine from './TaskLine'

export default function CategoryList({ title, tasks, categoryId, tasksDispatch }) {
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
                                <TaskLine key={task.id} task={task} tasksDispatch={tasksDispatch} />
                            )
                        }
                    }
                    )}
                </ul>
            }
        </>)
}
