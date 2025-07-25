import { createBrowserRouter } from "react-router-dom";
import Index from "../page/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/index",
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
]);
