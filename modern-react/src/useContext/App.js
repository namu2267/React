import React from "react";
import "./App.css";
import Page from "./Page";
import { ThemeContextProvider } from "./ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <Page />;
    </ThemeContextProvider>
  );
}
