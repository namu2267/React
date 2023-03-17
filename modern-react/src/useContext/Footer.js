import React from "react";
import { useDark } from "./ThemeContext";

export default function Footer() {
  const { isDark, onToggle } = useDark();

  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <button className="button" onClick={onToggle}>
        Mode Change
      </button>
    </footer>
  );
}
