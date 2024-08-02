import CategoryList from "./CategoryList"

export default function TasksBoard({ categories, tasks, dispatch }) {

    return (
        <div>
            {Object.entries(categories).map(([objkey, value]) => (
                <CategoryList key={value} title={objkey} tasks={tasks} categoryId={value} dispatch={dispatch} />
            ))}
        </div>
    )
}