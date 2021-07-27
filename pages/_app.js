import React from "react";
import Dashboard from "../layouts/Dashboard";
import "../styles/globals.css";
import ThemeProvider from "../contexts/DashboardTheme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
