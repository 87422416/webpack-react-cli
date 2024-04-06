import Header from "@/components/header";
import style from "./index.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Counter from "@/components/counter";
import { getDate } from "@/utils";
import view from "@/assets/view.jpg";

export default function Home() {
  const navigate = useNavigate();

  const handleHey = () => {
    navigate("hey");
  };

  const handleYoo = () => {
    navigate("yoo");
  };

  return (
    <div className={style.container}>
      <Header></Header>
      {getDate()}
      <Counter></Counter>
      <div>
        <button onClick={handleHey}>hey</button> |{" "}
        <button onClick={handleYoo}>yoo</button>
      </div>
      <Outlet></Outlet>
      <img src={view} alt="view" />
    </div>
  );
}
