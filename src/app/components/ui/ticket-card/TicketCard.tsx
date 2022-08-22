import React from "react";
// Components
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// Constants
import { LOCALE, CURRENCY } from "../../../constants/constants";
// Styles
import styles from "./TicketCard.module.scss";
// Utils
import { formatTime, currencyFormatter } from "../../../utils/utils";
// Types
import { ITicketCard } from "./types";
// Images
import XiamenAirLogo from "../../../assets/companies/XiamenAir.png";
import S7Logo from "../../../assets/companies/S7-airlines.png";

export interface ILogoMap {
  [name: string]: string;
}

const logoMap: ILogoMap = {
  "7dc12d0b-ce42-48a0-8673-0dad4d698764": XiamenAirLogo,
  "cddfa038-823b-43b1-b18d-395731881077": S7Logo,
};

const renderStops = (stops: string | string[] | []) => {
  if (!stops.length) {
    return (
      <Grid item className={styles.noStops} xs={4}>
        <Typography component="h2" variant="h2">
          Direct Flight
        </Typography>
      </Grid>
    );
  }

  if (stops.length === 1) {
    return (
      <Grid item className={styles.stops} xs={4}>
        <Typography component="h2" variant="h2">
          Stop
        </Typography>
        <Typography component="h3" variant="h3">
          {stops[0]}
        </Typography>
      </Grid>
    );
  }

  if (stops.length >= 2) {
    return (
      <Grid item className={styles.stops} xs={4}>
        <Typography component="h2" variant="h2">
          Stops
        </Typography>
        <Typography component="h3" variant="h3">
          {(stops as string[]).map((stop, index) => {
            if (index === stops.length - 1) {
              return stop;
            }
            return `${stop}, `;
          })}
        </Typography>
      </Grid>
    );
  }

  return;
};

const TicketCard: React.FC<ITicketCard> = ({
  price,
  departure,
  destination,
  departureTime,
  arrivalTime,
  travelTime,
  stops,
  companyName,
  companyId,
}) => {
  return (
    <Card className={styles.ticketCard}>
      <Box className={styles.priceLogo}>
        <Typography variant="h3" component="h3">
          {currencyFormatter(price, LOCALE, CURRENCY)}
        </Typography>
        <img
          src={logoMap[companyId]}
          alt={companyName}
          className={styles.companyLogo}
        />
      </Box>
      <Grid container className={styles.flightInfo}>
        <Grid item className={styles.airports} xs={4}>
          <Typography component="h2" variant="h2">
            {departure} — {destination}
          </Typography>
          <Typography component="h3" variant="h3">
            {formatTime(departureTime, "numeric")} —{" "}
            {formatTime(arrivalTime, "numeric")}
          </Typography>
        </Grid>
        <Grid item className={styles.travelTime} xs={4}>
          <Typography component="h2" variant="h2">
            Travel Time
          </Typography>
          <Typography component="h3" variant="h3">
            {formatTime(travelTime)}
          </Typography>
        </Grid>
        {renderStops(stops)}
      </Grid>
    </Card>
  );
};

export default TicketCard;
