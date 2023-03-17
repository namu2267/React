import React from "react";
import { useDark } from "./ThemeContext";

export default function Content() {
  const { isDark } = useDark();

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>화이팅 화이팅 화이팅 🔥</p>
    </div>
  );
}
