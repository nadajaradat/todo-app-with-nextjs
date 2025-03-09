import {ITask} from "@/types/tasks";
import Task from "@/app/components/Task";

interface ToDoListProps {
    tasks: ITask[]
}
const ToDoList: React.FC<ToDoListProps> = ({tasks}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(task=>(
                   <Task key={task.id} task={task}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList;