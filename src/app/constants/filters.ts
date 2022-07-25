export interface Filter {
    id: number,
    value: string,
    label: string
}

const FILTERS: Filter[] = [
    {
        id: 0,
        value: 'cheapest',
        label: 'Cheapest'
    },
    {
        id: 1,
        value: 'fastest',
        label: 'Fastest'
    },
    {
        id: 2,
        value: 'optimal',
        label: 'Optimal'
    }
];

export default FILTERS;