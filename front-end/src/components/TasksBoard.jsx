export default function TasksBoard({ tasks, dispatch }) {
    return (<ul>
        {tasks.map(task =>
            <li key={task.id}>
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}
                    onClick={() => dispatch({ type: 'toggle_task', id: task.id, done: task.done })}>
                    {task.text}
                </span>
                <button>Edit</button>
                <button onClick={() => dispatch({ type: 'delete_task', id: task.id })}>Delete</button>
            </li>
        )}
    </ul>
    )
}