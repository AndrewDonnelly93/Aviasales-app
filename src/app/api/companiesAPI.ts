import { get } from "../config/axios";
// Types
import { ICompany } from "../components/ui/ticket-card/types";
// Companies URL
const url = "/a1b1c28b32d9785bb26c";

type GetCompanyResponse = {
  data: ICompany[];
};

const Companies = {
  /**
   * Returns a list of all companies
   * @returns {Promise<GetCompanyResponse>}
   */
  list: (): Promise<GetCompanyResponse> => get(`${url}`),
};

export default Companies;
