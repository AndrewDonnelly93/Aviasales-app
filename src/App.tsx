import React from "react";
// Components
import Home from "./app/pages/Home";
import Container from "@mui/material/Container";
import Logo from "./app/components/structure/logo/Logo";
// Styles
import styles from "./app/styles/style.module.scss";

const App = () => {
  return (
    <Container className={styles.container} fixed>
      <Logo />
      <Home />
    </Container>
  );
};

export default App;
