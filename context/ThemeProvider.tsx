import { createContext, PropsWithChildren, useContext, useState } from "react";
import { THEME } from "@/constants/theme";

type ThemeModeTypes = "light" | "dark";
type ThemeTypes = {
  primary: string;
  secondary: string;
  gray: string;
};
type ThemeContextTypes = {
  theme: ThemeTypes;
  themeMode: ThemeModeTypes;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeModeTypes>>;
};

const ThemeContext = createContext<ThemeContextTypes | null>(null);

export const useTheme = () => {
  if (!ThemeContext) {
    throw Error("useTheme must be used under ThemeProvider Context ");
  }
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [themeMode, setThemeMode] = useState<ThemeModeTypes>("light");
  const theme = THEME[themeMode];

  const themeContextValue = {
    theme,
    themeMode,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
