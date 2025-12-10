import EASYSVG from '../assets/Features/easy-to-use.svg';
import FLEXIBLESVG from '../assets/Features/flexible.svg';
import SUPPORTSVG from '../assets/Features/support.svg';
import PROSVG from '../assets/Features/onus-pro.svg';

interface FeaturePoint {
    boldText?: string;
    text: string;
}

export interface Feature {
    id: number;
    label: string;
    title: string;
    points: FeaturePoint[];
    image: string;
}

export const featuresData: Feature[] = [
    {
        id: 1,
        label: "features.easy_label",
        title: "features.easy_title",
        points: [
            { boldText: "features.easy_p1_bold", text: "features.easy_p1_text" },
            { boldText: "features.easy_p2_bold", text: "features.easy_p2_text" }
        ],
        image: EASYSVG
    },
    {
        id: 2,
        label: "features.flexible_label",
        title: "features.flexible_title",
        points: [
            { boldText: "features.flexible_p1_bold", text: "features.flexible_p1_text" },
            { boldText: "features.flexible_p2_bold", text: "features.flexible_p2_text" }
        ],
        image: FLEXIBLESVG
    },
    {
        id: 3,
        label: "features.support_label",
        title: "features.support_title",
        points: [
            { text: "features.support_p1_text" }
        ],
        image: SUPPORTSVG
    },
    {
        id: 4,
        label: "features.pro_label",
        title: "features.pro_title",
        points: [
            { boldText: "features.pro_p1_bold", text: "features.pro_p1_text" },
            { boldText: "features.pro_p2_bold", text: "features.pro_p2_text" }
        ],
        image: PROSVG
    }
];