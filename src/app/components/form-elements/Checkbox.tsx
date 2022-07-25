import React from "react";
// Components
import Checkbox from "@mui/material/Checkbox";
import SvgIcon from "@mui/material/SvgIcon";
// Styles
import styles from "./Checkbox.module.scss";
// Assets
import { ReactComponent as CheckboxIcon } from "../../assets/checkbox.svg";
import { ReactComponent as CheckboxCheckedIcon } from "../../assets/checkbox-checked.svg";

const CustomCheckbox = () => {
    return (
        <Checkbox
            icon={<SvgIcon component={CheckboxIcon} />}
            checkedIcon={<SvgIcon component={CheckboxCheckedIcon} />}
            className={styles.checkbox}
        />
    );
};

export default CustomCheckbox;

