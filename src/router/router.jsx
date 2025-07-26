import { createBrowserRouter } from "react-router-dom";
import Index from "../page/index.jsx";
import IntelisisSection from "../page/intelisis.jsx";
import FasItmMoreliaSection from "../page/fasItmMorelia.jsx"

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
  {
    path: "/intelisis",
    children: [
      {
        index: true,
        element: <IntelisisSection />,
      },
    ],
  },
  {
    path: "/itm",
    children: [
      {
        index: true,
        element: <FasItmMoreliaSection />,
      },
    ],
  },
]);
