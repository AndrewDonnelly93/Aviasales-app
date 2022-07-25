import React from "react";
import styled from "styled-components";
// Components
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./app/pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Logo from "./app/components/Logo";
// Styles
import "./App.css";
import styles from "./app/styles/style.module.scss";

const App = () => {
  const Wrapper = styled(Container)`
    width: 754px !important;
    padding: 0 !important;
    max-width: 754px !important;
  `;

  const theme = createTheme({
    palette: {
      primary: {
        main: styles.colourPrimary,
      },
      secondary: {
        main: styles.colourSecondary,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper fixed>
        <Logo />
        <Home />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
