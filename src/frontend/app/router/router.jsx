import { createBrowserRouter } from "react-router-dom";
import Index from "@pages/home";
import NotFound from "@pages/notFound"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
