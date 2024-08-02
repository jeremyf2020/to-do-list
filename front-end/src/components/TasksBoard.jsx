import { useContext } from "react";
import CategoryList from "./CategoryList"
import { CategoriesContext } from "../App";

export default function TasksBoard({ tasks, tasksDispatch }) {
    const { categories } = useContext(CategoriesContext);

    return (
        <div>
            {Object.entries(categories).map(([objkey, value]) => (
                <CategoryList key={value} title={objkey} tasks={tasks} categoryId={value} tasksDispatch={tasksDispatch} />
            ))}
        </div>
    )
}