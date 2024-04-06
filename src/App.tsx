import style from "@/App.scss";
import routes from "@/router";
import { useRoutes } from "react-router-dom";

export default function App() {
  const router = useRoutes(routes);

  return <div className={style.container}>{router}</div>;
}
