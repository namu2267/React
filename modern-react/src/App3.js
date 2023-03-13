import React, { useState } from "react";
import CreateUser3 from "./CreateUser3";
import UserList3 from "./UserList3";
import "./App3.css";

export default function App3() {
  //input의 상태관리 (useState훅 이용)
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  //구조분해할당
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onCreate = (id) => {
    const user = {
      id,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({ username: "", email: "" });
  };

  const [users, setUsers] = useState([
    {
      id: "1",
      username: "열공",
      email: "100@hi.com",
      active: true,
    },
    {
      id: "2",
      username: "홧팅",
      email: "ft@hi.com",
      active: true,
    },
    {
      id: "3",
      username: "펭수",
      email: "GP@hi.com",
      active: false,
    },
  ]);

  const onRemove = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <div className="container">
      <div className="inner-container">
        <CreateUser3
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList3 users={users} onRemove={onRemove} onToggle={onToggle} />
      </div>
    </div>
  );
}
