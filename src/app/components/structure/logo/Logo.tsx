import React from "react";
// Components
import Box from "@mui/material/Box";
// Assets
import logoImage from "../../../assets/logo.svg";
// Styles
import styles from "./Logo.module.scss";

const LogoImage: React.FC = () => {
  return (
    <Box className={styles.container}>
      <img className={styles.logo} src={logoImage} alt="Logo" />
    </Box>
  );
};

export default LogoImage;
