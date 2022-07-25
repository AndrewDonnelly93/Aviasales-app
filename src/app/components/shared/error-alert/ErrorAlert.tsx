import React from "react";
// Components
import Box from "@mui/material/Box";
// Styles
import styles from "./ErrorAlert.module.scss";

interface IErrorAlert {
  errorMessage: string;
}

const ErrorAlert: React.FC<IErrorAlert> = ({ errorMessage }) => {
  return (
    <Box className={styles.error}>
      <p>{errorMessage}</p>
    </Box>
  );
};

export default ErrorAlert;
