import { createBrowserRouter , Navigate, Outlet } from "react-router-dom";

import AccountLayout from "../layouts/account";
import Logout from "../pages/logout";
import Members from "../pages/members";
import NotFound from "../pages/Notfound";
import Projects from "../pages/projects";
import ProjectContainer from "../pages/projects/ProjectContainer";
import Signin from "../pages/signin";
import Signup from "../pages/signup";

import ProtectedRoute from "./ProtectedRoutes";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: (
              <>
                Show project details <Outlet />
              </>
            ),
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" replace /> },
                  {
                    path: "new",
                    element: <>Show Modal window to create a task</>,
                  },
                  {
                    path: ":taskID",
                    children: [
                      { index: true, element: <>Show Task Details</> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        path: "members",
        element: <Members />,
      },
    ],
  },
]);

export default router;
