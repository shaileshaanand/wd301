import { useContext } from "react";
import { RouterProvider } from "react-router-dom";

import { CommentsProvider } from "./context/comment/context";
import { MembersProvider } from "./context/members/context";
import { ProjectsProvider } from "./context/projects/context";
import { ThemeContext } from "./context/theme";
import router from "./routes";

// To do that, first I'll import the `ProjectsProvider` in the `App` component.

// Then I'll wrap the RouterProvider component with the <ProjectsProvider> component.
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <ProjectsProvider>
        <MembersProvider>
          <CommentsProvider>
            <RouterProvider router={router} />
          </CommentsProvider>
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};

export default App;
