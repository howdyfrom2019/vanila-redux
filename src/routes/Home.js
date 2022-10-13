import React, {useCallback, useState} from "react";

const Home = () => {
  const [text, setText] = useState("");

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, [setText]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(text);
    setText("");
  }, [text]);

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type={"text"} placeholder={"Write your to-dos"} onChange={onChange} value={text || ""} />
        <button>Add</button>
        <ul />
      </form>
    </>
  );
}

export default Home;