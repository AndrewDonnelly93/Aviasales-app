import React from "react";
// Components
import { LocalizationProvider } from "@mui/x-date-pickers";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import InputText from "../../ui/form-elements/InputText";
// Styles
import styles from "./DatePicker.module.scss";

const DatePicker = () => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      localeText={{ start: "Depart", end: "Return" }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <>
            <InputText
              label="Depart"
              ref={startProps.inputRef as React.Ref<HTMLInputElement>}
              {...startProps.inputProps}
            />
            <InputText
              className={styles.inputReturn}
              label="Return"
              ref={endProps.inputRef as React.Ref<HTMLInputElement>}
              {...endProps.inputProps}
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
