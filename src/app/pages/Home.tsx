import React from "react";
// Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stops from "../components/ui/filters/StopsFilters";
import CompaniesFilters from "../components/ui/filters/CompaniesFilters";
import Filters from "../components/ui/filters/Filters";
import Loader from "../components/shared/loader/Loader";
import TicketCardsList from "../components/ui/ticket-card/TicketCardsList";
import Search from "../components/ui/search/Search";
// Styles
import "../styles/App.scss";

const Home: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Search />
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Stops />
          <CompaniesFilters />
        </Grid>
        <Grid item xs={8}>
          <Filters />
          <TicketCardsList />
          <Loader />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
