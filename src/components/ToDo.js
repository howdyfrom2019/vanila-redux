import React, {useCallback} from "react";
import { useDispatch } from "react-redux";
import {actionCreators} from "../store";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();

  const onBtnClick = useCallback((e) => {
    e.preventDefault();
    dispatch(actionCreators.deleteToDo(id));
  }, [dispatch, id]);
  return (
    <li>
      {text}
      <button onClick={onBtnClick} style={{ marginLeft: "24px" }}>DEL</button>
    </li>
  )
}

export default ToDo;