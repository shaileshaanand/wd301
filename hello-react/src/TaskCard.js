const TaskCard = ({ title, dueDate, asigneeName, completedAtDate }) => {
  return (
    <div className="border-2 border-black rounded p-3">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      {completedAtDate ? (
        <p>Completed on: {completedAtDate}</p>
      ) : (
        <p>Due Date: {dueDate}</p>
      )}
      <p>Assignee: {asigneeName}</p>
    </div>
  );
};

export default TaskCard;
