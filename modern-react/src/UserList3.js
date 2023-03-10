import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App3.css";

const User = ({ props, onRemove, onToggle }) => {
  return (
    <div className="User-container">
      <b
        style={{
          cursor: "pointer",
          color: props.active ? "aquamarine" : "black",
        }}
        onClick={() => onToggle(props.id)}
      >
        {props.username}
      </b>
      <span>{props.group}</span>
      <button onClick={() => onRemove(props.id)}>삭제</button>
    </div>
  );
};

export default function UserList3({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((item) => (
        <User
          props={item}
          key={item.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
