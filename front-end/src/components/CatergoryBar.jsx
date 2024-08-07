import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../App';
import { CirclePlus, Pencil, Save, X } from 'lucide-react';

export default function CatergoryBar({ selectedCategory, setSelectedCategory }) {
    const { categories } = useContext(CategoriesContext);
    const [editingCategory, setEditingCategory] = useState(false);

    function handleEdit() {
        if (editingCategory) {
            // tasksDispatch({ type: 'edit_task', id: task.id, text: taskContextRef.current.value });
        }
        setEditingCategory(!editingCategory);
    }

    function handAdd() {
        if (editingCategory) {
            // tasksDispatch({ type: 'edit_task', id: task.id, text: taskContextRef.current.value });
        }
        setEditingCategory(!editingCategory);
    }



    return (
        <div className='flex justify-between items-center relative mx-3 '>
            <div className='flex justify-start overflow-x-auto pt-1'>
                {Object.entries(categories).map(([objkey, value]) => (
                    <div key={objkey} className='relative'>
                        <input
                            className={`mx-1 rounded-xl cursor-pointer text-center outline-none border-none 
                            ${selectedCategory === value ? "bg-amber-600 text-lime-50" : "bg-white"}`}
                            key={objkey} defaultValue={value}
                            readOnly={value === "All" ? true : !editingCategory}
                            size={value.length}
                            onClick={(e) => { setSelectedCategory(value) }}
                        />
                        {editingCategory && value !== "All" &&
                            <span className='absolute right-0 -top-1 size-3 z-10 rounded bg-white'><X className='w-full h-full' /></span>}
                    </div>
                ))
                }
            </div >
            <div className="flex-shrink-0  flex items-center ">
                <button className='size-6 text-base text-zinc-400' onClick={handleEdit}>{editingCategory ? <Save size={16} /> : <Pencil size={16} />}</button>
                {/* <button className='size-6 text-base text-zinc-400' onClick={handAdd}>{editingCategory ? <Save size={16} /> : <Pencil size={16} />}</button> */}
                <div>Login</div>
            </div>
        </div>

    )
}
