import Hey from "@/components/hey";
import Home from "@/pages/home";
import Yoo from "@/components/yoo";
import { Navigate } from "react-router-dom";
import NotFound from "@/pages/notFound";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "", element: <Navigate to="hey" replace /> },
      { path: "hey", element: <Hey /> },
      { path: "yoo", element: <Yoo /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;
