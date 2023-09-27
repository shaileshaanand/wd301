import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { fetchProjects } from "../../context/projects/actions";
import { useProjectsDispatch } from "../../context/projects/context";
import { ProjectsDispatch } from "../../context/projects/reducer";

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch() as ProjectsDispatch;
  useEffect(() => {
    void fetchProjects(projectDispatch);
  }, [projectDispatch]);
  return <Outlet />;
};

export default ProjectContainer;
