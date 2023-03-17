import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

function App() {
  const [inputs, setInputs] = useState({ text: "" });

  const { text, done } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(e.target.value);
  };

  const handleCreate = (e) => {
    const 할일 = {
      text,
    };
    set할일리스트([...할일리스트, 할일]);

    setInputs({
      text: "",
    });
  };

  const [할일리스트, set할일리스트] = [
    {
      id: 1,
      text: "산책하기",
      done: true,
    },
    {
      id: 2,
      text: "운동하기",
      done: true,
    },
    {
      id: 3,
      text: "공부하기",
      done: true,
    },
    {
      id: 4,
      text: "책읽기",
      done: true,
    },
  ];

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate onChange={handleChange} onCreate={handleCreate} />
      </TodoTemplate>
    </>
  );
}

export default App;
