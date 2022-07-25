import React from "react";
// Components
import Box from "@mui/material/Box";
// Styles
import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
  return <Box className={styles.loader}>Load 5 more tickets</Box>;
};

export default Loader;
