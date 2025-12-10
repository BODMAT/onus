import { useTranslation } from "react-i18next";
import { assets } from "../data/crypto";
import { motion } from "framer-motion";

export function Asset() {
    const { t } = useTranslation();
    return (
        <section className="bg-white py-24 max-lg:py-10 max-md:py-6 overflow-hidden">
            <div className="container">

                <div className="flex flex-row max-lg:flex-col justify-between items-center gap-16 max-lg:gap-12">

                    <div className="w-[40%] max-lg:w-full flex flex-col items-start max-lg:items-center max-lg:text-center">

                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[48px] max-md:text-[40px] font-bold leading-[110%] mb-8"
                        >
                            <span className="text-[#0068FF] leading-[116%]">{t('asset_section.title_part1')}</span> <span className="text-[#09090A]">{t('asset_section.title_part2')}</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-wrap gap-4 max-md:gap-2 w-full max-lg:justify-center"
                        >
                            <button className="px-6 py-3 rounded-lg text-[#9EA0A3] font-semibold text-sm hover:text-[#09090A] transition-colors">
                                {t('asset_section.btn_popular')}
                            </button>
                            <button className="px-6 py-3 rounded-lg text-[#9EA0A3] font-semibold text-sm hover:text-[#09090A] transition-colors">
                                {t('asset_section.btn_gainers')}
                            </button>
                            <button className="px-6 py-3 rounded-lg bg-[#F5F7FA] text-[#0068FF] font-semibold text-sm">
                                {t('asset_section.btn_volumes')}
                            </button>
                        </motion.div>
                    </div>

                    <div className="w-[60%] max-lg:w-full grid grid-cols-2 max-md:grid-cols-1 gap-4">
                        {assets.map((asset, index) => (
                            <motion.div
                                key={asset.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                className="bg-[#F8F9FB] rounded-[20px] p-5 flex flex-col justify-between min-h-[140px] hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="font-bold text-[14px] text-[#09090A] text-base">{asset.name}</span>
                                            <span className="text-[#9EA0A3] text-[14px] text-sm font-medium">{asset.ticker}</span>
                                        </div>
                                        <div className="mt-2 flex items-baseline gap-1">
                                            <span className="font-bold text-[18px] text-[#09090A]">{asset.price}</span>
                                            <span className="text-[#2E2F32] text-[15px] font-medium">{asset.currency}</span>
                                        </div>
                                    </div>
                                    <img src={asset.icon} alt={asset.name} className="w-10 h-10 object-contain" />
                                </div>

                                <div className="flex justify-between items-end mt-2">
                                    <span
                                        className={`text-sm font-bold ${asset.isPositive ? 'text-[#0DB787]' : 'text-[#DC1F4E]'}`}
                                    >
                                        {asset.change}
                                    </span>
                                    <img src={asset.graph} alt="graph" className="h-8 w-auto object-contain" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}