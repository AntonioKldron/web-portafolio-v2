import { createBrowserRouter } from "react-router-dom";
import Index from "../page/index.jsx";
import NotFound from "../layout/pag404.jsx"

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
