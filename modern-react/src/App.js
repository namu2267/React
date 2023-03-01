import React from "react";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";

const App = () => {
  const users리스트관리 = [
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
  ];

  return <UserList users={users리스트관리} />;
};

export default App;
