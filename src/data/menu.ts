import { Statistic } from "../components/Statistic.tsx";
import { Asset } from "../components/Asset.tsx";
import { Features } from "../components/Features";
import { Benefits } from "../components/Benefits";
import { Faq } from "../components/Faq";

export interface MenuItem {
    name: string;
    link: string;
}

export const menu: MenuItem[] = [
    { name: "menu.statistic", link: "statistic" },
    { name: "menu.asset", link: "asset" },
    { name: "menu.features", link: "features" },
    { name: "menu.benefits", link: "benefits" },
    { name: "menu.faq", link: "faq" },
];

type MenuLink = typeof menu[number]['link'];
type ReactComponent = () => React.JSX.Element | null;
interface ComponentMapType {
    [key: MenuLink]: ReactComponent;
}

export const ComponentMap: ComponentMapType = {
    statistic: Statistic,
    asset: Asset,
    features: Features,
    benefits: Benefits,
    faq: Faq,
};