import React from "react";
import { v4 as uuidv4 } from "uuid";

function User({ user_props, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user_props.active ? "red" : "black",
        }}
        onClick={() => onToggle(user_props.id)}
      >
        {user_props.username}
      </b>

      <span>{user_props.email}</span>
      <button onClick={() => onRemove(user_props.id)}>삭제</button>
    </div>
  );
}

export default function UserList({ user받아옴, onRemove, onToggle }) {
  // const user객체 = [
  //   {
  //     id: 1,
  //     username: "hihiha2",
  //     email: "aaaa@ha.com",
  //   },
  //   {
  //     id: 2,
  //     username: "펭수",
  //     email: "ppp@ha.com",
  //   },
  //   {
  //     id: 3,
  //     username: "짱구",
  //     email: "zzang@ha.com",
  //   },
  // ];

  return (
    <div>
      {user받아옴.map((item) => (
        <User
          user_props={item}
          key={uuidv4()}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
