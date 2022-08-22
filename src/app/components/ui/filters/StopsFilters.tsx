import React from "react";
// Components
import Typography from "@mui/material/Typography";
import PaperWrapper from "../../shared/paper/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomCheckbox from "../form-elements/Checkbox";
// Data
import stops from "../../../constants/stops";
// Styles
import checkboxStyles from "../form-elements/Checkbox.module.scss";

const Stops: React.FC = () => {
  return (
    <PaperWrapper>
      <Typography variant="h3" component="h3">
        Stops
      </Typography>
      <FormGroup>
        {stops.map((stop) => {
          return (
            <FormControlLabel
              key={stop.id}
              control={<CustomCheckbox />}
              className={checkboxStyles.formLabel}
              label={stop.label}
            />
          );
        })}
      </FormGroup>
    </PaperWrapper>
  );
};

export default Stops;
