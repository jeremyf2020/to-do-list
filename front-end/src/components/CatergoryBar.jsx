import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../App';

export default function CatergoryBar() {
    const { categories, setCategories } = useContext(CategoriesContext);
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className='flex justify-between items-center relative'>
            <div className='flex justify-start mx-2 overflow-x-auto'>
                {Object.entries(categories).map(([objkey, value]) => (
                    <input
                        className={`mx-1 rounded-xl cursor-pointer text-center outline-none border-none
                            ${selectedCategory === value ? "bg-amber-600 text-lime-50" : "bg-white"}`}
                        key={objkey} defaultValue={value} readOnly size={value.length}
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedCategory(value);

                        }}
                    />
                ))
                }
            </div >
            <div className="flex-shrink-0  flex items-center ">
                <div>+</div>
                <div>Login</div>
            </div>
        </div>

    )
}
