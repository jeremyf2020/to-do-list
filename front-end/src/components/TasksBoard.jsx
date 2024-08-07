import { useContext, useState } from "react";
import CategoryList from "./CategoryList"
import { CategoriesContext } from "../App";
import TaskLine from "./TaskLine";

export default function TasksBoard({ tasks, tasksDispatch, selectedCategory }) {
    const { categories } = useContext(CategoriesContext);

    return (
        <div className="p-3 flex-1 overflow-auto">
            {selectedCategory === "All"
                ?
                Object.entries(categories).map(([objkey, value]) => (
                    <CategoryList key={objkey} title={value} tasks={tasks} categoryId={objkey} tasksDispatch={tasksDispatch} />
                ))
                :
                tasks.map(task => {
                    if (task.category_id === Object.keys(categories).find(key => categories[key] === selectedCategory)) {
                        return (
                            <TaskLine key={task.id} task={task} tasksDispatch={tasksDispatch} />
                        )
                    }
                })
            }
        </div>
    )
}



