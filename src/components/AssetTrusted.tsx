import GirlPNG from "../assets/Asset/girl.png";
import ManPNG from "../assets/Asset/man.png";
import LaptopSVG from "../assets/Asset/laptop.svg";
import LogoSVG from "../assets/Asset/logo.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function AssetTrusted() {
    const { t } = useTranslation();
    return (
        <section className="bg-white min-h-screen flex flex-col justify-center py-10 overflow-hidden">
            <div className="max-w-[1376px] w-full mx-auto px-4 h-full">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[120%] lg:leading-[133%] text-[#09090A] text-center mt-4 lg:mt-12"
                >
                    {t('hero.trusted_prefix')} <span className="text-[#0068FF]">7,046,382</span> {t('hero.trusted_suffix')}
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-3 items-center mt-8 lg:mt-10">

                    <motion.img
                        src={GirlPNG}
                        alt="girl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-[60%] sm:w-[40%] lg:w-auto max-w-[300px] lg:max-w-none object-contain"
                    />

                    <div className="flex flex-col justify-between gap-8 lg:gap-[60px] items-center w-full">

                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="w-full max-w-[340px] p-4 shadow-[0_10px_40px_0_rgba(0,0,0,0.15)] rounded-[10px] bg-white"
                        >
                            <div className="flex justify-between items-center gap-2 mb-3">
                                <img src={LogoSVG} alt="logo" />
                                <span className="text-[#4D4F53] text-sm">{t('hero.now')}</span>
                            </div>
                            <div className="leading-[140%] text-[#4D4F53] text-sm sm:text-base">
                                {t('hero.received')} <span className="text-[#09090A] font-semibold">6.80 USDT</span> {t('hero.from')} <br />
                                <span className="text-[#09090A] font-semibold">{t('hero.staking_daily')}</span>
                            </div>
                        </motion.div>

                        <motion.img
                            src={LaptopSVG}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="w-full max-w-[538px] h-auto"
                            alt="laptop"
                        />
                    </div>

                    <motion.img
                        src={ManPNG}
                        alt="man"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-[60%] sm:w-[40%] lg:w-auto max-w-[300px] lg:max-w-none object-contain"
                    />
                </div>
            </div>
        </section>
    )
}