import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
  removeTask: (task: TaskItem) => void;
}

const TaskList = (props: Props) => {
  return (
    <ul>
      {props.tasks.map((task, idx) => (
        <li key={idx}>
          <Task item={task} removeTask={() => props.removeTask(task)} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
