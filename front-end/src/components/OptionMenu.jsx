import React, { forwardRef, useEffect, useRef, useState } from 'react'

export default function OptionMenu({ showTimeError }) {
    const [categoryBtnSelection, setCategoryBtnSelection] = useState("None");
    const [disableCustomInput, setDisableCustomInput] = useState(true);
    const categoryInputRef = useRef("");

    useEffect(() => {
        if (!disableCustomInput && categoryBtnSelection === "Custom") {
            categoryInputRef.current.focus();
        }
    }, [disableCustomInput, categoryBtnSelection]);


    function handleCustomCatergoy(target) {
        setDisableCustomInput(target === "None")
        setCategoryBtnSelection(target)
    }

    return (
        <div className='absolute bottom-10 bg-[#ffd2b9] left-0 p-4 animate-slide-up rounded-t-lg'>
            <div className='flex mb-4 rounded-md border-2 border-yellow-700 p-4 relative'>
                <div className='absolute -top-4 left-1 bg-[#ffd2b9] text-yellow-700 px-1 '>Categories: </div>
                <div className={`rounded-l-md px-2 w-fit cursor-pointer ${categoryBtnSelection === "None" ? "bg-orange-400 text-white" : "bg-stone-200 pr-3 -mr-1"}`}
                    onClick={() => handleCustomCatergoy("None")}>None</div>
                <div className={`rounded-r-md px-2 w-fit cursor-pointer -mr-1 z-1 ${categoryBtnSelection === "Custom" ? "bg-orange-400 text-white rounded-l-md" : "bg-stone-200"}`}
                    onClick={() => handleCustomCatergoy("Custom")}>Custom</div>
                <div >
                    <CustomInput disableCustomInput={disableCustomInput} ref={categoryInputRef} />
                </div>
            </div>
            <div className='flex mb-0 rounded-md border-2 border-yellow-700 p-4 relative'>
                <div className='absolute -top-4 left-1 bg-[#ffd2b9] text-yellow-700 px-1 '>Time: </div>
                <label>Start: <input type="datetime-local" name="startTime" /> </label>
                <br />
                <label>End: <input type="datetime-local" name="endTime" /> </label>
                {showTimeError !== "" && <div>{showTimeError}</div>}
            </div>
        </div >
    )
}



const CustomInput = forwardRef(({ disableCustomInput }, ref) => {
    return (
        <input className='rounded-r-md px-2' name="category" disabled={disableCustomInput} ref={ref}></input>
    );
});

