export interface Asset {
    amount: number;
    hasPlus: boolean;
    hasStar: boolean;
    info: string;
    suffix?: string;
}

export const AssetStatistic: Asset[] = [
    {
        amount: 600,
        hasPlus: true,
        hasStar: false,
        info: "statistic.popular_crypto"
    },
    {
        amount: 3,
        hasPlus: true,
        hasStar: false,
        suffix: "m",
        info: "statistic.join_telegram"
    },
    {
        amount: 1,
        hasPlus: true,
        hasStar: false,
        suffix: "m",
        info: "statistic.join_x"
    },
    {
        amount: 4.7,
        hasPlus: false,
        hasStar: true,
        info: "statistic.reviews"
    },
    {
        amount: 5,
        hasPlus: false,
        hasStar: false,
        info: "statistic.countries"
    }
];