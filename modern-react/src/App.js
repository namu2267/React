import React, { useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const App = () => {
  //CreateUser에서 필요한 props준비
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  //inputs.username / inputs.ㄱemail 구조분해할당
  const { username, email } = inputs;

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //useState로 컴포넌트의 상태로서 관리
  const [user객체, setUser객체] = useState([
    {
      id: 1,
      username: "hihiha2",
      email: "aaaa@ha.com",
      active: "true",
    },
    {
      id: 2,
      username: "펭수",
      email: "ppp@ha.com",
      active: "false",
    },
    {
      id: 3,
      username: "짱구",
      email: "zzang@ha.com",
      active: "false",
    },
  ]);

  const onCreate = () => {
    const user = {
      username,
      email,
    };

    setUser객체([...user객체, user]);

    setInputs({
      username: "",
      email: "",
    });
  };

  const onRemove = (id) => {
    setUser객체(user객체.filter((a) => a.id !== id));
  };

  const onToggle = (id) => {
    setUser객체(
      user객체.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={handleChange}
        onCreate={onCreate}
      />
      <UserList user받아옴={user객체} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
};

export default App;
