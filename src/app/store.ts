import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ticketCardsReducer from "./components/ticket-card/ticketCardsSlice";
import counterReducer from "../features/counter/counterSlice";
import companiesReducer from "./components/ticket-card/companiesSlice";

export const store = configureStore({
  reducer: {
    ticketCards: ticketCardsReducer,
    counter: counterReducer,
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
