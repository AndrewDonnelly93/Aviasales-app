import { get } from "../config/axios";
// Types
import { ITicketCardAPI } from "../components/ui/ticket-card/types";
// Ticket Cards URL
const url = "/163b5e66df9f2741243e";

type GetTicketCardsResponse = {
  data: ITicketCardAPI[];
};

const TicketCards = {
  /**
   * Returns a list of all ticket cards
   * @returns {Promise<GetTicketCardsResponse>}
   */
  list: (): Promise<GetTicketCardsResponse> => get(`${url}`),
};

export default TicketCards;
