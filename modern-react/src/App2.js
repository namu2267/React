import React, { useState } from "react";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
import InputSample from "./InputSample";
import UserList from "./UserList";

const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onCreate = () => {
    const user = {
      username,
      email,
    };
    setUsers리스트관리([...users리스트관리, user]);

    setInputs({
      username: "",
      email: "",
    });
  };

  const [users리스트관리, setUsers리스트관리] = useState([
    {
      id: 1,
      username: "hihiha2",
      email: "aaaa@ha.com",
    },
    {
      id: 2,
      username: "펭수",
      email: "ppp@ha.com",
    },
    {
      id: 3,
      username: "짱구",
      email: "zzang@ha.com",
    },
  ]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users리스트관리} />;
    </>
  );
};

export default App;
