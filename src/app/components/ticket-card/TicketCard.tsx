import React from "react";
// Components
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// Styles
import styles from "./TicketCard.module.scss";
// Utils
import { formatTime } from "../../utils/utils";

export interface ITicketCard {
  companyName: string;
  price: number;
  departure: string;
  destination: string;
  departureTime: number;
  arrivalTime: number;
  travelTime: number;
  stops: string | string[] | [];
}

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
}) => {
  return (
    <Card className={styles.ticketCard}>
      <Box className={styles.priceLogo}>
        <Typography variant="h3" component="h3">
          {price} €
        </Typography>
        <img
          src={`../companies/${companyName}.png`}
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
