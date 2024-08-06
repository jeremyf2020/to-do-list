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
            <div >
                Categories:
                <div className={`btn ${categoryBtnSelection === "None" && "active"}`}
                    onClick={() => handleCustomCatergoy("None")}>None</div>
                <div className={`btn ${categoryBtnSelection === "Custom" && "active"}`}
                    onClick={() => handleCustomCatergoy("Custom")}>Custom</div>
                <div >
                    <CustomInput disableCustomInput={disableCustomInput} ref={categoryInputRef} />
                </div>
            </div>
            <div>
                <label>Start Time<input type="datetime-local" name="startTime" /> </label>
                <br />
                <label>End Time<input type="datetime-local" name="endTime" /> </label>
                {showTimeError !== "" && <div>{showTimeError}</div>}
            </div>
        </div>
    )
}



const CustomInput = forwardRef(({ disableCustomInput }, ref) => {
    return (
        <input name="category" disabled={disableCustomInput} ref={ref}></input>
    );
});

