import LogoSVG from "../assets/logo.svg";
import FacebookSVG from "../assets/Footer/facebook.svg";
import TelegramSVG from "../assets/Footer/tg.svg";
import XSVG from "../assets/Footer/x.svg";
import YouTubeSVG from "../assets/Footer/youtube.svg";
import { footerLinks } from "../data/footer";

export function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8 max-lg:pt-12 max-lg:pb-6 border-t border-[#93969D]">
            <div className="container mx-auto px-4">

                <div className="flex flex-col xl:flex-row gap-12 xl:gap-8 mb-16 max-md:mb-10">

                    <div className="w-full xl:w-[20%] flex flex-col items-start">
                        <img src={LogoSVG} alt="ONUS" className="h-[46px] mb-6" />
                        <p className="text-[#09090A] text-[18px] font-normal mb-6 max-w-40 leading-[133%]">
                            Invest in digital assets together
                        </p>
                        <div className="flex gap-5">
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                                <img src={FacebookSVG} alt="Facebook" />
                            </a>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                                <img src={XSVG} alt="X (Twitter)" />
                            </a>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                                <img src={YouTubeSVG} alt="YouTube" />
                            </a>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                                <img src={TelegramSVG} alt="Telegram" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full xl:w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {footerLinks.map((column, colIndex) => (
                            <div key={colIndex} className="flex flex-col gap-8">
                                {column.map((group, groupIndex) => (
                                    <div key={groupIndex}>
                                        <h3 className="font-bold text-[#09090A] text-base mb-1 leading-[150%]">
                                            {group.title}
                                        </h3>
                                        <ul className="flex flex-col gap-2">
                                            {group.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <a
                                                        href="#"
                                                        className="text-[#93969D] text-sm hover:text-[#0068FF] transition-colors leading-[150%]"
                                                    >
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-[#93969D] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#93969D]">
                    <div className="text-center md:text-left leading-[125%]">
                        © 2023 ONUS Finance UAB. Powered by Vemanti Group.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#09090A] transition-colors leading-[125%]">AML Policy</a>
                        <div className="w-px min-h-4 bg-[#93969D]"></div>
                        <a href="#" className="hover:text-[#09090A] transition-colors leading-[125%]">Terms of Service</a>
                        <div className="w-px min-h-4 bg-[#93969D]"></div>
                        <a href="#" className="hover:text-[#09090A] transition-colors leading-[125%]">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}