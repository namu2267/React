import React from "react";
import { useDark } from "./ThemeContext";

export default function Header() {
  const { isDark } = useDark();

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgrey",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>모드 테스트중!!!</h1>
    </header>
  );
}
