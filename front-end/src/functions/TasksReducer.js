export default function tasksReducer(tasks, action) {
    switch (action.type) {
        case "add_task": {
            return [
                ...tasks,
                {
                    id: crypto.randomUUID(),
                    text: action.text,
                    done: false,
                }
            ];
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

