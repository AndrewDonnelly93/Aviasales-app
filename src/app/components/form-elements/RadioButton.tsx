import React from "react";
// Components
import Radio from "@mui/material/Radio";
import SvgIcon from "@mui/material/SvgIcon";
// Styles
import styles from "./RadioButton.module.scss";
// Assets
import { ReactComponent as RadioButtonIcon } from "../../assets/radiobutton.svg";
import { ReactComponent as RadioButtonCheckedIcon } from "../../assets/radiobutton-checked.svg";

interface IProps {
    value: string;
}

const CustomRadioButton: React.FC<IProps> = ({value}) => {
  return (
      <Radio
          value={value}
      icon={<SvgIcon component={RadioButtonIcon} />}
      checkedIcon={<SvgIcon component={RadioButtonCheckedIcon} />}
      className={styles.radio}
    />
  );
};

export default CustomRadioButton;
