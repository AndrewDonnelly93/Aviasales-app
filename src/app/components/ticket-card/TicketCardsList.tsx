import React from "react";
// Components
import TicketCard, { ITicketCard } from "./TicketCard";
import Box from "@mui/material/Box";

const renderTicketCards = (ticketCards: ITicketCard[]) => {
  return ticketCards.map(
    ({
      company,
      icon,
      price,
      departure,
      destination,
      departureTime,
      arrivalTime,
      travelTime,
      stops,
      companyCode,
    }) => (
      <TicketCard
        company={company}
        icon={icon}
        price={price}
        departure={departure}
        destination={destination}
        departureTime={departureTime}
        arrivalTime={arrivalTime}
        travelTime={travelTime}
        stops={stops}
        companyCode={companyCode}
      />
    )
  );
};

interface ITicketCardsList {
  ticketCards: ITicketCard[];
}

const TicketCardsList: React.FC<ITicketCardsList> = ({ ticketCards }) => {
  return <Box>{renderTicketCards(ticketCards)}</Box>;
};

export default TicketCardsList;
