import React, { useState } from 'react'
import TaskLine from './TaskLine'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function CategoryList({ title, tasks, categoryId, tasksDispatch }) {
    const [showList, setShowList] = useState(true)

    return (
        <>
            <div className='flex'>
                <button onClick={() => { setShowList(!showList) }}>{showList ? <ChevronDown /> : <ChevronRight />}</button>
                <h2 className='text-xl font-bold ' >{title !== "All" ? title : "Default"}</h2>
            </div>
            {showList &&
                <ul className='ml-6'>
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
