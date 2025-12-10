import { useTranslation } from 'react-i18next';
import { featuresData } from '../data/feature';
import { motion } from 'framer-motion';

export function Features() {
    const { t } = useTranslation();
    return (
        <section className="bg-dark-gradient py-8 max-lg:py-7 max-md:py-5">
            <div className="container mx-auto px-4">

                <div className="mb-8 max-md:mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[48px] max-lg:text-[40px] max-md:text-[32px] leading-[133%] font-bold text-white mb-4"
                    >
                        {t('features.header_title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white leading-[150%] max-md:text-base"
                    >
                        {t('features.header_desc')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-6">
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}

                            className="border border-[#1E2843] rounded-4xl p-10 max-lg:p-8 max-md:p-6 flex flex-col justify-between min-h-[500px] max-md:min-h-auto group hover:border-[#0068FF] transition-colors duration-300"
                        >
                            <div className="w-full flex justify-center items-center mb-8 grow">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="max-h-[300px] object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div>
                                <span className="text-[#0068FF] font-bold uppercase text-[18px] mb-2 block">
                                    {t(feature.label)}
                                </span>
                                <h3 className="text-[32px] max-lg:text-[28px] font-bold text-white mb-4 leading-[125%]">
                                    {t(feature.title)}
                                </h3>
                                <ul className="">
                                    {feature.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start gap-2 text-[#B8BBC3] leading-[150%]">
                                            <span className="block mt-2 w-1.5 h-1.5 min-w-1.5 rounded-full bg-white"></span>
                                            <span>
                                                {point.boldText && <span className="font-bold text-white">{t(point.boldText)} </span>}
                                                {t(point.text)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}