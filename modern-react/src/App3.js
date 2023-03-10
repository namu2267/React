import React, { useState } from "react";
import CreateUser3 from "./CreateUser3";
import UserList3 from "./UserList3";
import "./App3.css";

export default function App3() {
  //input의 상태관리

  const [inputs, setInputs] = useState({
    username: "",
    group: "",
  });

  const { username, group } = inputs;

  const onChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // user 상태관리
  const [users, setUsers] = useState([
    {
      id: "1",
      username: "제니",
      group: "blackpink",
      active: true,
    },
    {
      id: "2",
      username: "정국",
      group: "bts",
      active: true,
    },
    {
      id: "3",
      username: "펭수",
      group: "EBS",
      active: false,
    },
  ]);

  // uuid사용시, id값을 입력해줘야하는것 기억할것!!
  const onCreate = (id) => {
    const user = {
      id,
      username,
      group,
    };

    setUsers([...users, user]);

    setInputs({ username: "", group: "" });
  };

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
        <div>
          <CreateUser3
            username={username}
            group={group}
            onChange={onChange}
            onCreate={onCreate}
          />
        </div>
        <UserList3 users={users} onRemove={onRemove} onToggle={onToggle} />
      </div>
    </div>
  );
}
