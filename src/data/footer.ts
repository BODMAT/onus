interface FooterLink {
    title: string;
    links: string[];
}

export const footerLinks: FooterLink[][] = [
    [
        {
            title: "Bitcoin",
            links: ["Market", "Buying guide", "Research", "Price prediction", "Bitcoin Halving", "Bitcoin ETF"]
        },
        {
            title: "Ethereum",
            links: ["Market", "Purchase guide", "Research", "Price forecast"]
        }
    ],
    [
        {
            title: "Gold price today",
            links: ["PNJ", "DOJI", "BTMC", "SJC", "Phu Quy", "Global gold price"]
        },
        {
            title: "Today's exchange rate",
            links: ["USD", "EUR", "GBP", "JPY", "AUD"]
        }
    ],
    [
        {
            title: "Bank interest rates",
            links: ["Techcombank", "Vietcombank", "BIDV", "VIB", "TPBank"]
        },
        {
            title: "About Us",
            links: ["ONUS Coin", "ONUS Branding", "ONUS Whitepaper", "ONUS Protection Fund", "ONUS Resources", "ONUS Launcher", "ONUS Fee", "ONUS License", "ONUS Listing", "ONUS Affiliate"]
        }
    ],
    [
        {
            title: "Securities",
            links: ["HPG", "NVL", "HSG", "FPT", "ACB", "VCB"]
        },
        {
            title: "Products",
            links: ["Giao dịch Spot", "Mua Crypto", "Futures trading", "Bank loan interest calculator", "Bank savings interest calculator", "Compound interest calculator", "Investment course", "Make money online"]
        }
    ],
    [
        {
            title: "Support",
            links: ["Account", "Deposit/withdrawal guide", "Investment", "Staking & Farming", "ONUS policies", "Other information", "FAQs"]
        }
    ]
];