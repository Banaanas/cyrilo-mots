import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { appTheme } from "../../styles/appTheme";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Header } from "./Header/Header";

// Persistent Layout
export const Layout = ({ children }: { children: ReactNode }) => {
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
