import { Pencil, X, Save } from 'lucide-react';
import React, { useContext, useRef } from 'react'
import { CategoriesContext } from "../App";

export default function CategoryEditField({ selectedCategory, setSelectedCategory, value, objkey, editingCategory, handleDelete }) {
    const fieldRef = useRef(value)
    const { categories, setCategories } = useContext(CategoriesContext);

    function handleSave(objkey) {
        setCategories(prevCategories => ({
            ...prevCategories,
            [objkey]: fieldRef.current.value
        }));
    }

    return (
        <div className='relative'>
            <input
                className={`mx-1 rounded-xl cursor-pointer text-center outline-none border-none 
                            ${selectedCategory === value ? "bg-amber-600 text-lime-50" : "bg-white"}`}
                ref={fieldRef}
                defaultValue={value}
                readOnly={value === "All" ? true : !editingCategory}
                size={value.length}
                onClick={(e) => { setSelectedCategory(value) }}
            />
            {editingCategory && value !== "All" &&
                <>
                    <span className='absolute right-0 bottom-0 size-3 z-10 rounded bg-white'
                        onClick={() => handleSave(objkey)}
                    ><Save className='w-full h-full' /></span>
                    <span className='absolute right-0 -top-1 size-3 z-10 rounded bg-white'
                        onClick={() => handleDelete(objkey)}
                    ><X className='w-full h-full' /></span>
                </>
            }
        </div>
    )
}
