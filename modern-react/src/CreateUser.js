import React from "react";

export default function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="이름을 적으세요!"
        onChange={onChange}
        value={username}
      />

      <input
        name="email"
        placeholder="이메일을 입력하세요!"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록하기</button>
    </div>
  );
}
