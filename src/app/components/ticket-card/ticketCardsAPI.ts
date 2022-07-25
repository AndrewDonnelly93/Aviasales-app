import { get } from "../../config/axios";
// Ticket Cards URL
const url = "/163b5e66df9f2741243e";
// Companies URL
const companiesUrl = "/a1b1c28b32d9785bb26c";

const TicketCards = {
  /**
   * Returns a list of all ticket cards
   * @returns {Promise<T>}
   */
  list: () => get(`${url}`),

  /**
   * Returns a list of all companies
   * @returns {Promise<T>}
   */
  companies: () => get(`${companiesUrl}`),
};

export default TicketCards;
