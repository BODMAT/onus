import { useAccordion } from "../hooks/useAccordion";
import { faqData } from "../data/faq";
import ARRSVG from "../assets/FAQ/arr-to-right.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Faq() {
    const { t } = useTranslation();
    const { toggle, isOpen } = useAccordion();

    return (
        <section className="bg-[#F5F6F8] pt-10 pb-16 max-lg:py-7 max-md:py-5">
            <div className="container">

                <h2 className="text-[48px] max-lg:text-[40px] max-md:text-[32px] font-bold text-[#09090A] leading-[133%] mb-8 max-md:mb-6">
                    {t('faq.header_title')}
                </h2>

                <div className="flex flex-col gap-8">
                    {faqData.map((item) => {
                        const isItemOpen = isOpen(item.id);

                        return (
                            <div
                                key={item.id}
                                className="overflow-hidden transitioned"
                            >
                                <button
                                    onClick={() => toggle(item.id)}
                                    className="w-full flex justify-between items-center text-left cursor-pointer select-none"
                                >
                                    <span className="text-[24px] max-md:text-[16px] font-semibold text-[#09090A] pr-4 leading-[133%]">
                                        {t(item.question)}
                                    </span>
                                    <span
                                        className={`flex items-center justify-center w-6 h-6 transform transition-transform duration-300 origin-center ${isItemOpen ? 'rotate-0' : 'rotate-90'}`}
                                    >
                                        <img src={ARRSVG} alt="arrow" />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isItemOpen && (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 }
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[#4D5056] text-base max-md:text-sm leading-[150%] whitespace-pre-line mt-2">
                                                {t(item.answer).replace(/\n\n/g, '\n')}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}