import React, { useState } from 'react'
import TaskLine from './TaskLine'
import { ChevronDown, ChevronRight, CirclePlus } from 'lucide-react'

export default function CategoryList({ title, tasks, categoryId, tasksDispatch }) {
    const [showList, setShowList] = useState(true)

    function handleAdd(categoryId) {
        tasksDispatch({ type: 'add_task', object: { id: crypto.randomUUID(), category_id: categoryId } })
    }

    return (
        <>
            <div className='flex'>
                <button onClick={() => { setShowList(!showList) }}>{showList ? <ChevronDown /> : <ChevronRight />}</button>
                <h2 className='text-xl font-bold ' >{title !== "All" ? title : "Default"}</h2>
                <button className='size-6 text-base text-zinc-400' onClick={() => handleAdd(categoryId)}><CirclePlus size={16} strokeWidth={2} /></button>
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
