import { NewTaskItem, TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppState {
  tasks: TaskItem[];
}
const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  const addTask = (task: NewTaskItem) => {
    setTaskAppState({
      tasks: [
        ...taskAppState.tasks,
        {
          ...task,
          id: String(taskAppState.tasks.length + 1),
        },
      ],
    });
  };
  const removeTask = (task: TaskItem) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((t) => t.id !== task.id),
    });
  };

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-md mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 font-bold text-center mb-2">Pending</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} removeTask={removeTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
