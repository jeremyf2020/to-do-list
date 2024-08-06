import React, { useContext } from 'react'
import { CategoriesContext } from '../App';

export default function CatergoryBar() {
    const { categories, setCategories } = useContext(CategoriesContext);

    const selectedSCategory = "All"

    return (
        <div className='flex justify-between items-center relative'>
            <div className='flex justify-start mx-2 overflow-x-auto'>
                {Object.entries(categories).map(([objkey, value]) => (
                    <div
                        className={`flex justify-start mx-1 rounded-xl  px-2 
                            ${selectedSCategory === value ? "bg-amber-600 text-lime-50" : "bg-white"}`}
                        key={objkey} >{value} </div>
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
