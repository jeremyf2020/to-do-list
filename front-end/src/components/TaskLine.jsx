import { CircleX, Pencil, Save, Square, SquareCheckBig, Trash2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

export default function TaskLine({ task, tasksDispatch }) {
    const [editing, setEditing] = useState(false);
    const taskContextRef = useRef(task.text)

    function handleEdit() {
        if (editing) {
            tasksDispatch({ type: 'edit_task', id: task.id, text: taskContextRef.current.value });
        }
        setEditing(!editing);
    }
    
    useEffect(() => {
        if (editing && taskContextRef.current) {
            taskContextRef.current.focus();
        }
    }, [editing]);

    return (
        <li >
            <div className='bg-white flex justify-between rounded-md'>
                    {editing ?
                    <input className="w-full rounded-l-md text-lg pl-2 " type="text" defaultValue={task.text} ref={taskContextRef} /> :
                        <div className='rounded-md text-lg pl-2 inline-flex items-center align-middle cursor-pointer' onClick={() => tasksDispatch({ type: 'toggle_task', id: task.id, done: task.done })}>
                            {task.done ? <SquareCheckBig size={16} strokeWidth={1} /> : <Square size={16} strokeWidth={1} />}
                            <div className={`ml-2 ${task.done ? 'line-through' : ''}`} >
                                {task.text}
                            </div>
                        </div>
                        }
                <div className='ml-1 inline-flex items-center align-middle cursor-pointer'>
                    <button className='size-6 text-base text-zinc-400' onClick={handleEdit}>{editing ? <Save size={16} /> : <Pencil size={16} />}</button>
                    <button className='size-6 text-base text-zinc-400' onClick={() => tasksDispatch({ type: 'delete_task', id: task.id })}><Trash2 size={16} /></button>
                </div>
            </div>
        </li >
    )
}

 /* style={{ textDecoration: task.done ? 'line-through' : 'none' } */ 
