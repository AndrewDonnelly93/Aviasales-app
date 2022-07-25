import React from "react";
// Components
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
// Styles
import styles from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <Box className={styles.preloader} color="primary">
      <CircularProgress />
    </Box>
  );
};

export default Preloader;
