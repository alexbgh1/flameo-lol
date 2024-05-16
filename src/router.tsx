// Components
import App from "./App.tsx";
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Utils
import { resolvePath } from "./utils/index.ts";

const router = createBrowserRouter([
  {
    path: resolvePath(""),
    element: <App />,
  },
]);

const RouterProviderExtension = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderExtension;
