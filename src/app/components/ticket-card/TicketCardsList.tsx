import React, { useEffect } from "react";
// Components
import TicketCard from "./TicketCard";
import Box from "@mui/material/Box";
import Preloader from "../preloader/Preloader";
// State
import {
  selectTicketCards,
  fetchTicketCards,
  TicketCardInterface,
  TicketCardsStatus,
} from "./ticketCardsSlice";
import {
  selectCompanies,
  fetchCompanies,
  CompaniesStatus,
  CompanyInterface,
} from "./companiesSlice";
// Hooks
import { useDispatch, useSelector } from "react-redux";

const renderTicketCards = (
  ticketCards: TicketCardInterface[],
  companies: CompanyInterface[]
) => {
  return ticketCards.map((ticketCard) => {
    const { price, companyId, id } = ticketCard;
    const companyName = companies.find(
      (company) => companyId === company.id
    )!.name;
    const departure = ticketCard.info.origin;
    const destination = ticketCard.info.destination;
    const departureTime = parseInt(ticketCard.info.dateStart, 10);
    const arrivalTime = parseInt(ticketCard.info.dateEnd, 10);
    const travelTime: number =
      // @ts-ignore
      parseInt(arrivalTime, 10) - parseInt(departureTime, 10);
    const stops = ticketCard.info.stops;

    return (
      <TicketCard
        key={id}
        price={price}
        departure={departure}
        destination={destination}
        departureTime={departureTime}
        arrivalTime={arrivalTime}
        travelTime={travelTime}
        stops={stops}
        companyName={companyName}
      />
    );
  });
};

// @ts-ignore
const TicketCardsList: React.FC = () => {
  // Hooks
  const dispatch = useDispatch();
  const ticketCards = useSelector(selectTicketCards);
  const companies = useSelector(selectCompanies);
  // @ts-ignore
  const ticketCardsStatus = useSelector((state) => state.ticketCards.status);
  const companiesStatus = useSelector(
    // @ts-ignore
    (state) => state.companies.status
  );

  // Fetching ticketCards
  useEffect(() => {
    if (ticketCardsStatus === TicketCardsStatus.IDLE) {
      // @ts-ignore
      dispatch(fetchTicketCards());
    }
  }, [ticketCardsStatus, dispatch]);

  // Fetching companies
  useEffect(() => {
    if (companiesStatus === CompaniesStatus.IDLE) {
      // @ts-ignore
      dispatch(fetchCompanies());
    }
  }, [companiesStatus, dispatch]);

  if (
    ticketCardsStatus === TicketCardsStatus.LOADING ||
    companiesStatus === CompaniesStatus.LOADING
  ) {
    return <Preloader />;
  } else if (
    ticketCardsStatus === TicketCardsStatus.SUCCEEDED &&
    companiesStatus === CompaniesStatus.SUCCEEDED
  ) {
    return <Box>{renderTicketCards(ticketCards, companies)}</Box>;
  }
};

export default TicketCardsList;
