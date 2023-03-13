import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateUser3({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="이름을 입력하세요"
        value={username}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={onChange}
      />
      <button onClick={() => onCreate(uuidv4())}> 등록하기</button>
    </div>
  );
}
