import React from "react";
// Components
import Paper from "@mui/material/Paper";
// Styles
import styles from "./Paper.module.scss";

interface IProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const PaperWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <Paper color="primary" className={styles.paper}>
      {children}
    </Paper>
  );
};

export default PaperWrapper;
