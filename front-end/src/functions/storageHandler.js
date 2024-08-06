export function getTasksFromStorage() {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
}

export function getCategoriesFromStorage() {
    const savedCategories = localStorage.getItem('categories');

    return savedCategories ? new Object(JSON.parse(savedCategories)) : { [getUUID()]: "All" };
}

function getUUID() {
    return crypto.randomUUID()
}
