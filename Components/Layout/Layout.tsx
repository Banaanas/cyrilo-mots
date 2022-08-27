import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useRouter } from "next/router";
import React from "react";

import appTheme from "../../styles/appTheme";
import GlobalStyles from "../../styles/GlobalStyles";
import Header from "./Header/Header";

// Persistent Layout
const Layout = ({ children }: { children: React.ReactNode }) => {
  // Header does NOT render for Login Page
  const router = useRouter();
  const { pathname } = router;

  return (
    <EmotionThemeProvider theme={appTheme}>
      <GlobalStyles />
      {pathname !== "/login" ? <Header /> : null}
      {children}
    </EmotionThemeProvider>
  );
};

export default Layout;
