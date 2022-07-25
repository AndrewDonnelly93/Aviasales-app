import { get } from "../../config/axios";
// Companies URL
const url = "/a1b1c28b32d9785bb26c";

const Companies = {
  /**
   * Returns a list of all companies
   * @returns {Promise<T>}
   */
  list: () => get(`${url}`),
};

export default Companies;
