interface Stop {
    id: number;
    amount: number;
    label: string;
}

export const STOPS: Stop[] = [
    {
        id: 0,
        amount: 0,
        label: "Nonstop (direct)"
    },
    {
        id: 1,
        amount: 1,
        label: "Up to 1 stop"
    },
    {
        id: 2,
        amount: 2,
        label: "Up to 2 stops"
    },
    {
        id: 3,
        amount: 2,
        label: "Up to 3 stops"
    }
];

export default STOPS;