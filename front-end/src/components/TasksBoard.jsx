import { useContext } from "react";
import CategoryList from "./CategoryList"
import { CategoriesContext } from "../App";

export default function TasksBoard({ tasks, tasksDispatch }) {
    const { categories } = useContext(CategoriesContext);

    return (
        <div className="p-3">
            {Object.entries(categories).map(([objkey, value]) => (
                <CategoryList key={objkey} title={value} tasks={tasks} categoryId={objkey} tasksDispatch={tasksDispatch} />
            ))}
        </div>
    )
}