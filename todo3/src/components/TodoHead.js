// 오늘의 날짜, 요일을 보여줌
// 앞으로 해야할일이 몇개 남았는지 보여줌

import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1{
    margin: 0
    font-size:36px
    color: #343a40;
  }
.day {
  margin-top: 4px;
  color:#868e96;
  font-size: 21px
}
.task-left {
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
}
`;

function TodoHead(props) {
  return (
    <TodoHeadBlock>
      <h1>2019년 7월 10일</h1>
      <div className="day">수요일</div>
      <div className="task-left">할 일 1개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
