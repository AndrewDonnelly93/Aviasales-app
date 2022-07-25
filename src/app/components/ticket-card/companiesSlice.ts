import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
// API
import Companies from "./companiesAPI";

export interface CompanyInterface {
  id: string;
  name: string;
  logo: string;
}

export enum CompaniesStatus {
  "IDLE" = "idle",
  "LOADING" = "loading",
  "SUCCEEDED" = "suceeeded",
  "FAILED" = "failed",
}

export interface CompaniesState {
  companiesList: CompanyInterface[] | [];
  status: CompaniesStatus;
}

const initialState: CompaniesState = {
  companiesList: [],
  status: CompaniesStatus.IDLE,
};

// Fetching a list of companies
export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  async () => {
    const response = await Companies.list();
    return response.data;
  }
);

// @ts-ignore
export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.status = CompaniesStatus.LOADING;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.status = CompaniesStatus.SUCCEEDED;
        state.companiesList = state.companiesList.concat(action.payload);
      })
      .addCase(fetchCompanies.rejected, (state) => {
        state.status = CompaniesStatus.FAILED;
      });
  },
});

export const selectCompanies = (state: RootState) =>
  // @ts-ignore
  state.companies.companiesList;

export default companiesSlice.reducer;
