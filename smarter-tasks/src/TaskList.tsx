import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
  deteleTask: (taskId: number) => void;
}
const TaskList = (props: Props) => {
  return (
    <ul>
      {props.tasks.map((task, idx) => (
        <li key={idx}>
          <Task
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            deleteTask={() => props.deteleTask(idx)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
