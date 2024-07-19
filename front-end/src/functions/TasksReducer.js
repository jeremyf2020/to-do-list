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
        case "delete_task": {
            return tasks.filter(task => task.id !== action.id)
        }
        case "toggle_task": {
            return tasks.map(t => {
                if (t.id === action.id) {
                    t.done = !action.done
                }
                return t;
            })
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

