import { ThemeProvider, CssBaseline, createTheme } from "@material-ui/core";
import { createContext, useMemo, useState } from "react";

export const Theme = createContext();

export default function DashboardTheme({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Theme.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </Theme.Provider>
    </ThemeProvider>
  );
}
