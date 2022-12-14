import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import {add} from "../store";
import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, [setText]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
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
          {toDos.map((v) => <ToDo text={v.text} id={v.id} key={v.id} />)}
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
    addToDo: (text) => dispatch(add(text))
  };
}

export default connect(getCurrentState, mapDispatchToProps)(Home);
