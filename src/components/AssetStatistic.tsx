import { type Asset, AssetStatistic as data } from "../data/asset";
import StarIcon from "../assets/Asset/star.svg";
import { useCounter } from "../hooks/useCounter";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface StatisticItemProps {
    item: Asset;
    className?: string;
    delay?: number;
}

const StatisticItem = ({ item, className, delay = 0 }: StatisticItemProps) => {
    const { t } = useTranslation();
    const { count, ref } = useCounter(item.amount, 2000);

    const isFloat = item.amount % 1 !== 0;
    const displayCount = isFloat ? count.toFixed(1) : Math.floor(count);

    const formattedAmount =
        (Number(displayCount) < 10 && !item.hasPlus && !item.hasStar)
            ? `0${displayCount}`
            : displayCount;

    return (
        <motion.div
            ref={ref}

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}

            className={`
                flex flex-col items-center justify-start px-4 grow 
                w-1/3 max-md:w-full 
                mb-0 max-md:mb-8 
                ${className}
            `}
        >
            <div className="text-[64px] max-lg:text-[48px] flex items-center font-bold text-[#0068FF] leading-none mb-2 whitespace-nowrap">
                {formattedAmount}

                {item.suffix && <span>{item.suffix}</span>}
                {item.hasPlus && <span>+</span>}
                {item.hasStar && (
                    <span className="pl-2">
                        <img src={StarIcon} alt="star" />
                    </span>
                )}
            </div>
            <p className="text-[#4D4F53] text-center text-base max-lg:text-sm font-medium max-w-[500px] leading-[150%]">
                {t(item.info)}
            </p>
        </motion.div>
    );
};

export function AssetStatistic() {
    return (
        <section className="bg-white py-24 max-lg:py-16">
            <div className="container">
                <div className="flex flex-wrap justify-center gap-y-12">
                    {data.map((item, index) => {
                        const isLastInVisualRow = index === 2 || index === data.length - 1;

                        return (
                            <StatisticItem
                                key={index}
                                item={item}
                                delay={index * 0.1}
                                className={!isLastInVisualRow ? 'border-r border-[#E5E7EB] max-md:border-none' : ''}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}