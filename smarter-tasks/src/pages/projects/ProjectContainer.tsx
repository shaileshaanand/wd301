import { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";
import { ProjectsDispatch } from "../../context/projects/reducer";

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch() as ProjectsDispatch;
  useEffect(() => {
    void fetchProjects(projectDispatch);
  }, [projectDispatch]);
  return <Outlet />;
};

export default ProjectContainer;
