import React from "react";
const TaskCard = ({ title, dueDate, assigneeName, completedAtDate }: {
  title: string,
  dueDate?: string,
  assigneeName: string,
  completedAtDate?: string
}) => {
  return (
    <div className="border-2 border-black rounded p-3">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      {completedAtDate && <p>Completed on: {completedAtDate}</p>}{" "}
      {dueDate && <p>Due on: {dueDate}</p>}
      <p>Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
