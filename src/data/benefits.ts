import SafetySVG from '../assets/Benefits/safety.svg';
import SecuritySVG from '../assets/Benefits/security.svg';
import TestingSVG from '../assets/Benefits/testing.svg';
import AssuranceSVG from '../assets/Benefits/assurance.svg';
import BugBountySVG from '../assets/Benefits/bug-bounty.svg';
import FlexibilitySVG from '../assets/Benefits/flexibility.svg';

export interface BenefitItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const benefitsData: BenefitItem[] = [
    {
        id: 1,
        title: "benefits.safety_title",
        description: "benefits.safety_desc",
        icon: SafetySVG
    },
    {
        id: 2,
        title: "benefits.testing_title",
        description: "benefits.testing_desc",
        icon: TestingSVG
    },
    {
        id: 3,
        title: "benefits.assurance_title",
        description: "benefits.assurance_desc",
        icon: AssuranceSVG
    },
    {
        id: 4,
        title: "benefits.bug_bounty_title",
        description: "benefits.bug_bounty_desc",
        icon: BugBountySVG
    },
    {
        id: 5,
        title: "benefits.flexibility_title",
        description: "benefits.flexibility_desc",
        icon: FlexibilitySVG
    },
    {
        id: 6,
        title: "benefits.security_title",
        description: "benefits.security_desc",
        icon: SecuritySVG
    }
];