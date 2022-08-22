import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ticketCardsReducer from "./stores/ticketCardsSlice";
import companiesReducer from "./stores/companiesSlice";

export const store = configureStore({
  reducer: {
    ticketCards: ticketCardsReducer,
    companies: companiesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
