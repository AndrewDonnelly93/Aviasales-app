import React, { useEffect } from "react";
// Components
import TicketCard from "./TicketCard";
import Box from "@mui/material/Box";
import SkeletonLoader from "./SkeletonLoader";
// State
import {
  selectTicketCards,
  fetchTicketCards,
  TicketCardsStatus,
} from "../../../stores/ticketCardsSlice";
import {
  selectCompanies,
  fetchCompanies,
  CompaniesStatus,
} from "../../../stores/companiesSlice";
// Types
import { ICompany, ITicketCardAPI } from "./types";
// Hooks
import { useDispatch, useSelector } from "react-redux";
import ErrorAlert from "../../shared/error-alert/ErrorAlert";

const renderTicketCards = (
  ticketCards: ITicketCardAPI[],
  companies: ICompany[]
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
        companyId={companyId}
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
  // @ts-ignore
  const ticketCardsError = useSelector((state) => state.ticketCards.error);
  // @ts-ignore
  const companiesError = useSelector((state) => state.companies.error);

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

  // Loading
  if (
    ticketCardsStatus === TicketCardsStatus.LOADING ||
    companiesStatus === CompaniesStatus.LOADING
  ) {
    return <SkeletonLoader amount={5} />;

    // Successful fetching
  } else if (
    ticketCardsStatus === TicketCardsStatus.SUCCEEDED &&
    companiesStatus === CompaniesStatus.SUCCEEDED
  ) {
    return <Box>{renderTicketCards(ticketCards, companies)}</Box>;

    // Error while fetching
  } else if (ticketCardsStatus === TicketCardsStatus.FAILED) {
    <ErrorAlert errorMessage={ticketCardsError} />;
  } else if (companiesStatus === CompaniesStatus.FAILED) {
    <ErrorAlert errorMessage={companiesError} />;
  }
};

export default TicketCardsList;
