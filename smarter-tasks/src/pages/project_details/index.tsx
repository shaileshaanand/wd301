import React from "react";
import { Outlet } from "react-router-dom";

import ProjectDetails from "./ProjectDetails";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <>
      <ProjectDetails />
      <Outlet />
    </>
  );
};

export default ProjectDetailsIndex;
