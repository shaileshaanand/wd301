import { useState } from "react";
import "./App.css";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className=" mx-40 mt-6">
      <h1 className="text-4xl mb-2 font-bold">Smarter Tasks</h1>
      <h6 className="text-lg mb-2">
        <span className="font-bold"> Project:</span> Graduation Final Year
        Project (Revamp College Website)
      </h6>
      <div className="flex w-full gap-14 mt-4">
        <div className="flex-1 border-2 border-black p-3 rounded-2xl space-y-4">
          <h2 className="text-center text-2xl font-bold">Pending</h2>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            asigneeName="Rohit S"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            asigneeName="Rohit M"
          />
          <div>
            <button className="w-full bg-gray-200 text-left px-3 py-1 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>{" "}
              New Task
            </button>
          </div>
        </div>
        <div
          className="flex-1 border-2 border-black p-3 rounded-2xl space-y-4"
          space-y-2
        >
          <h2 className="text-center text-2xl font-bold">Done</h2>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            asigneeName="Rohit M"
          />
          <TaskCard
            title="Get the approval from principal"
            completedAtDate="20th April"
            asigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
