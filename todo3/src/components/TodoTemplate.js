// 투두의 레이아웃 설정 페이지
// 페이지 중앙에 그림자가 적용된 흰색박스를 보여준다

import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  /* 추후 박스하단에 추가버튼을 위치시키기 위한 설정 */
  position: relative;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);

  /* 페이지 중앙에 나타나도록 설정 */
  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
