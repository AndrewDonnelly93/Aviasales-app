import React from "react";
// Components
import TextField from "@mui/material/TextField";
// Styles
import styles from "./InputText.module.scss";

interface IProps {
  label: string;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  rest?: any;
}

const InputText: React.FC<IProps> = ({ label, className, ref, ...rest }) => {
  return (
    <TextField
      className={`${styles.textField} ${className}`}
      label={label}
      ref={ref}
      {...rest}
    />
  );
};

export default InputText;
