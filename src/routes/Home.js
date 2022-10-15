import React, {useCallback, useState} from "react";
import {connect, useSelector} from "react-redux";
import {actionCreators} from "../store";
import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo }) => {
  console.log(toDos);
  const [text, setText] = useState("");

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, [setText]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(text);
    setText("");
    addToDo(text);
  }, [addToDo, text]);

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type={"text"} placeholder={"Write your to-dos"} onChange={onChange} value={text || ""}/>
        <button>Add</button>
        <ul>
          {toDos.map(v => <ToDo {...v} />)}
        </ul>
      </form>
    </>
  );
}

function getCurrentState(state) {
  return { toDos: state }
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text))
  };
}

export default connect(getCurrentState, mapDispatchToProps)(Home);
