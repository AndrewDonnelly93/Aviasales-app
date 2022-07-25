interface CompanyFilter {
    id: number;
    filter: string;
    label: string;
}

const COMPANIES_FILTERS: CompanyFilter[] = [
    {
        id: 0,
        filter: 'all',
        label: 'All'
    },
    {
        id: 1,
        filter: 's7',
        label: 'S7 Airlines'
    },
    {
        id: 2,
        filter: 'xiamen-air',
        label: 'XiamenAir'
    }
];

export default COMPANIES_FILTERS;