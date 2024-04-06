import { useDispatch, useSelector } from "react-redux";
import style from "./index.scss";
import {
  selectNum,
  add,
  sub,
  change,
  asyncAdd,
  asyncSub,
} from "@/store/counterReducer";
import { ChangeEvent } from "react";
import { AppDispatch } from "@/store";

export default function Counter() {
  const num = useSelector(selectNum);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    dispatch(add());
  };
  const handleSub = () => {
    dispatch(sub());
  };

  return (
    <h1 className={style.container}>
      <button
        onClick={() => {
          dispatch(asyncSub());
        }}
      >
        Async Sub
      </button>
      <button onClick={handleSub}>-</button>
      <input
        value={num}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch(change(+e.target.value));
        }}
      />
      <button onClick={handleAdd}>+</button>
      <button
        onClick={() => {
          dispatch(asyncAdd());
        }}
      >
        Async Add
      </button>
    </h1>
  );
}
