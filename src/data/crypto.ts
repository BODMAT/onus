import BTCCoin from "../assets/Asset/Bitcoin (BTC).svg";
import ETHCoin from "../assets/Asset/Ethereum (ETH).svg";
import SOLCoin from "../assets/Asset/Solana (SOL).svg";
import USDCoin from "../assets/Asset/USD Coin (USDC).svg";

import BTCGraph from "../assets/Asset/btc-v.svg";
import ETHGraph from "../assets/Asset/eth-v.svg";
import SOLGraph from "../assets/Asset/sol-v.svg";
import USDCGraph from "../assets/Asset/usdc-v.svg";

export interface CryptoAsset {
    id: string;
    name: string;
    ticker: string;
    price: string;
    currency: string;
    change: string;
    isPositive: boolean;
    icon: string;
    graph: string;
}

export const assets: CryptoAsset[] = [
    {
        id: "btc",
        name: "Bitcoin",
        ticker: "BTC",
        price: "110,496.6",
        currency: "USD",
        change: "-1.73%",
        isPositive: false,
        icon: BTCCoin,
        graph: BTCGraph
    },
    {
        id: "usdc",
        name: "USD Coin",
        ticker: "USDC",
        price: "1",
        currency: "USD",
        change: "+0.03%",
        isPositive: true,
        icon: USDCoin,
        graph: USDCGraph
    },
    {
        id: "eth",
        name: "Ethereum",
        ticker: "ETH",
        price: "3,737.41",
        currency: "USD",
        change: "-2.22%",
        isPositive: false,
        icon: ETHCoin,
        graph: ETHGraph
    },
    {
        id: "sol",
        name: "Solana",
        ticker: "SOL",
        price: "175.66",
        currency: "USD",
        change: "-6.9%",
        isPositive: false,
        icon: SOLCoin,
        graph: SOLGraph
    }
];