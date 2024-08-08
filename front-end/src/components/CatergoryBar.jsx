import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../App';
import { CirclePlus, Pencil, Save, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import CategoryEditField from './CategoryEditField';

export default function CatergoryBar({ selectedCategory, setSelectedCategory, tasksDispatch }) {
    const { categories, setCategories } = useContext(CategoriesContext);
    const [editingCategory, setEditingCategory] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

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

    function handleDelete(categoryId) {
        setCategoryToDelete(categoryId)
        // alert to confirm
        setShowModal(true)
    }

    function confirmDelete(categoryId) {
        // delete items
        tasksDispatch({ type: 'delete_task_by_categories', id: categoryId })
        // delete categories
        setCategories(Object.keys(categories)
            .filter(key => key !== categoryId)
            .reduce((obj, key) => {
                obj[key] = categories[key];
                return obj;
            }, {}))
        setShowModal(false);
    }

    return (
        <div className='flex justify-between items-center relative mx-3 '>
            <div className='flex justify-start overflow-x-auto pt-1'>
                {Object.entries(categories).map(([objkey, value]) => (
                    <CategoryEditField key={objkey} value={value} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} editingCategory={editingCategory} handleDelete={handleDelete} objkey={objkey} />
                ))
                }
                {showModal && createPortal(
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-lg">
                            <p>Are you sure you want to delete {categories[categoryToDelete]} and its tasks?</p>
                            <div className='flex justify-end mt-2'>
                                <button className='rounded-l-md bg-white px-2 border-amber-600 border' onClick={() => setShowModal(false)}>Cancel</button>
                                <button className='rounded-r-md bg-amber-600 text-lime-50 px-2 ' onClick={() => confirmDelete(categoryToDelete)}>Confirm</button>
                            </div>
                        </div>
                    </div>
                    ,
                    document.querySelector('#alert')
                )}
            </div >
            <div className="flex-shrink-0  flex items-center ">
                <button className='size-6 text-base text-zinc-400' onClick={handleEdit}>{editingCategory ? <Save size={16} /> : <Pencil size={16} />}</button>
                {/* <button className='size-6 text-base text-zinc-400' onClick={handAdd}>{editingCategory ? <Save size={16} /> : <Pencil size={16} />}</button> */}
                <div>Login</div>
            </div>

        </div>

    )
}
