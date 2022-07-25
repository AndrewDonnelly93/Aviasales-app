import React, { useState } from "react";
// Components
import InputText from "../form-elements/InputText";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
// Icons
import { ReactComponent as SwitcherIcon } from "../../../assets/switcher.svg";
import { ReactComponent as SwitcherHoverIcon } from "../../../assets/switcher-hover.svg";
// Styles
import styles from "./Search.module.scss";

const renderIcon = (currentIcon: string) => {
  if (currentIcon === "switcher") {
    return (
      <SvgIcon
        className={styles.switcherIcon}
        component={SwitcherIcon}
        inheritViewBox
      />
    );
  }

  return (
    <SvgIcon
      className={styles.switcherIcon}
      component={SwitcherHoverIcon}
      inheritViewBox
    />
  );
};

const ToFromInputs: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState("switcher");

  return (
    <Box className={styles.inputsContainer}>
      <InputText className={styles.inputFrom} label="From" />
      <Box
        className={styles.switcherContainer}
        onMouseEnter={() => setCurrentIcon("switcher-hover")}
        onMouseLeave={() => setCurrentIcon("switcher")}
      >
        {renderIcon(currentIcon)}
      </Box>
      <InputText className={styles.inputTo} label="To" />
    </Box>
  );
};

export default ToFromInputs;
