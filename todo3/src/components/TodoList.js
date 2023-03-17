// 할일 정보가 들어있는 todos배열을 map()을 사용하여, 여러개의 TodoItem 컴포넌트를 렌더링해준다.

import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding-bottom: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="산책하기" done={true} />
      <TodoItem text="명상하기" done={true} />
      <TodoItem text="보람찬 하루보내기" done={false} />
      <TodoItem text="프로그래머스풀기" done={true} />
    </TodoListBlock>
  );
}
