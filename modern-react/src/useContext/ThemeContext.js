import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const onToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, onToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useDark = () => useContext(ThemeContext);
