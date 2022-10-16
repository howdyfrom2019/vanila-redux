import React, {useCallback} from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import {remove} from "../store";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();

  const onBtnClick = useCallback((e) => {
    e.preventDefault();
    dispatch(remove(id));
  }, [dispatch, id]);
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick} style={{ marginLeft: "24px" }}>DEL</button>
    </li>
  )
}

export default ToDo;