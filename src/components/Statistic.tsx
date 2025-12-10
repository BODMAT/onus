import { AssetStatistic } from "./AssetStatistic";
import { AssetTrusted } from "./AssetTrusted";

export function Statistic() {
    return (
        <section className="">
            <AssetTrusted />
            <AssetStatistic />
        </section>
    )
}