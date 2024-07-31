export function handleSubmit(e, setTaskInput, setShowOptionMenu) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Add Task
    console.log(formJson.category)

    console.log(formJson)

    // Clear the form
    setTaskInput('');
    setShowOptionMenu(false);
}
