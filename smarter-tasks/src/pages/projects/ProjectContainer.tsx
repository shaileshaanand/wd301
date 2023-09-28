import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import { fetchProjects } from "../../context/projects/actions";
import { useProjectsDispatch } from "../../context/projects/context";

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  const memberDispatch = useMembersDispatch();
  useEffect(() => {
    void fetchProjects(projectDispatch);
    void fetchMembers(memberDispatch);
  }, [projectDispatch, memberDispatch]);
  return <Outlet />;
};

export default ProjectContainer;
