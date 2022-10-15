import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Detail = ({ toDo }) => {
  const { id } = useParams();
  const selector = useSelector((state) => {
    return { toDo: state.find(toDo => toDo.id === Number(id))};
  });

  return (
    <>
      <h1>{selector.toDo?.text}</h1>
      <h5>Created at: {selector.toDo?.id}</h5>
    </>
  )
}

export default Detail;