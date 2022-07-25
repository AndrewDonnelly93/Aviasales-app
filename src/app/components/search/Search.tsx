import React from "react";
// Components
import Grid from "@mui/material/Grid";
import ToFromInputs from "./ToFromInputs";
import DatePicker from "../date-picker/DatePicker";
// Styles
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  return (
    <Grid container className={styles.search}>
      <Grid item xs={6}>
        <ToFromInputs />
      </Grid>
      <Grid item xs={6}>
        <DatePicker />
      </Grid>
    </Grid>
  );
};

export default Search;
