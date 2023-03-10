import React from "react";
import { v4 as uuidv4 } from "uuid";

const User = ({ props }) => {
  return (
    <div>
      <b>{props.username}</b>
      <span>{props.email}</span>
    </div>
  );
};

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((item) => (
        <User props={item} key={uuidv4()} />
      ))}
    </div>
  );
};

export default UserList;
