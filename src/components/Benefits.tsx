import { useTranslation } from "react-i18next";
import { benefitsData } from "../data/benefits";
import { motion } from "framer-motion";

export function Benefits() {
    const { t } = useTranslation();
    return (
        <section className="bg-[#F5F6F8] py-10 max-lg:py-7 max-md:py-5">
            <div className="container">

                <div className="mb-8 max-md:mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[48px] max-lg:text-[40px] max-md:text-[32px] font-bold text-[#09090A] leading-[133%] mb-4"
                    >
                        {t('benefits.header_title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[#09090A] text-[16px] max-md:text-base leading-[150%]"
                    >
                        {t('benefits.header_desc')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 max-lg:gap-6 max-md:gap-4">
                    {benefitsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-4 max-md:p-3 flex flex-col items-start hover:shadow-md transition-shadow duration-300 h-full min-h-[220px]"
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-12 h-12 mb-6 object-contain"
                            />
                            <h3 className="text-[20px] leading-[120%] font-semibold text-[#09090A] mb-2">
                                {t(item.title)}
                            </h3>
                            <p className="text-[#09090A] text-[18px] text-base leading-[133%]">
                                {t(item.description)}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}