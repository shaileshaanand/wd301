import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <p>
        Hi {userData.name}, your email id is {userData.email}
      </p>
      <button
        type="submit"
        id="logout-link"
        className=" bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        onClick={() => {
          localStorage.removeItem("authToken");
          localStorage.removeItem("userData");
          navigate("/signin");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
