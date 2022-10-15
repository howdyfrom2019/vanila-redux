import React from "react";

const ToDo = ({ text }) => {
  return (
    <li>
      {text}
      <button style={{ marginLeft: "24px" }}>DEL</button>
    </li>
  )
}

export default ToDo;