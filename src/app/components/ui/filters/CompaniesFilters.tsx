import React from "react";
// Components
import Typography from "@mui/material/Typography";
import PaperWrapper from "../../shared/paper/Paper";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomRadioButton from "../form-elements/RadioButton";
// Data
import companiesFilters from "../../../constants/companies-filters";
// Styles
import radioButtonStyles from "../form-elements/RadioButton.module.scss";

const CompaniesFilters: React.FC = () => {
  return (
    <PaperWrapper>
      <Typography variant="h3" component="h3">
        Company
      </Typography>
      <RadioGroup defaultValue={companiesFilters[0].filter}>
        {companiesFilters.map((companyFilter) => {
          return (
            <FormControlLabel
              value={companyFilter.filter}
              key={companyFilter.id}
              control={<CustomRadioButton value={companyFilter.filter} />}
              className={radioButtonStyles.formLabel}
              label={companyFilter.label}
            />
          );
        })}
      </RadioGroup>
    </PaperWrapper>
  );
};

export default CompaniesFilters;
