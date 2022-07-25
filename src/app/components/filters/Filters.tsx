import React, { useState } from "react";
// Components
import Grid from "@mui/material/Grid";
// Data
import filters from "../../constants/filters";
// Styles
import styles from "./Filters.module.scss";

const renderFilters = (
  activeFilter: string,
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>
) => {
  const isActiveFilter = (filterValue: string) =>
    activeFilter === filterValue ? `${styles.filterActive}` : "";

  return filters.map((filter) => {
    return (
      <Grid
        item
        xs={4}
        key={filter.id}
        onClick={() => setActiveFilter(filter.value)}
        className={`${styles.filterBox} ${isActiveFilter(filter.value)}`}
      >
        {filter.label}
      </Grid>
    );
  });
};

const Filters: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0].value);
  return (
    <Grid container className={styles.filters}>
      {renderFilters(activeFilter, setActiveFilter)}
    </Grid>
  );
};

export default Filters;
