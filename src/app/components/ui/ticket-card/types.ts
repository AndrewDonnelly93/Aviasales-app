export interface ICompany {
  id: string;
  name: string;
  logo: string;
}

export interface ITicketCard {
  companyName: string;
  price: number;
  departure: string;
  destination: string;
  departureTime: number;
  arrivalTime: number;
  travelTime: number;
  stops: string | string[] | [];
  companyId: string;
}

// List of the airports codes
type CityCodes =
  | "MOW"
  | "HKT"
  | "HKG"
  | "JNB"
  | "PTB"
  | "ARH"
  | "TRN"
  | "KRS"
  | "SRT"
  | "LOS"
  | "EKV"
  | "EKT";

export interface ITicketCardAPI {
  id: string;
  price: number;
  companyId: string; // Airline company
  info: {
    origin: CityCodes;
    destination: CityCodes;
    dateStart: string; // Departure date
    dateEnd: string; // Arrival date
    stops: CityCodes[]; // Stops
    duration: number; // Duration of the flight in milliseconds
  };
}

export interface ISkeletonLoader {
  amount: number;
}
