import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateUser3({ username, group, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="이름을 입력하세요!"
        value={username}
        onChange={onChange}
      />
      <input
        name="group"
        placeholder="그룹이름은?!"
        value={group}
        onChange={onChange}
      />
      <button onClick={() => onCreate(uuidv4())}>등록하기</button>
    </div>
  );
}
