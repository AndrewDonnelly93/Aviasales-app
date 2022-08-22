import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
// API
import Companies from "../api/companiesAPI";
// Types
import { ICompany } from "../components/ui/ticket-card/types";

export enum CompaniesStatus {
  "IDLE" = "idle",
  "LOADING" = "loading",
  "SUCCEEDED" = "suceeeded",
  "FAILED" = "failed",
}

export interface CompaniesState {
  companiesList: ICompany[] | [];
  status: CompaniesStatus;
  error: string;
}

const initialState: CompaniesState = {
  companiesList: [],
  status: CompaniesStatus.IDLE,
  error: "",
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
        // @ts-ignore
        state.companiesList = state.companiesList.concat(action.payload);
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.status = CompaniesStatus.FAILED;
        state.error = action.error.message as string;
      });
  },
});

export const selectCompanies = (state: RootState) =>
  // @ts-ignore
  state.companies.companiesList;

export default companiesSlice.reducer;
