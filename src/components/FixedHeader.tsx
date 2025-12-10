import { useEffect } from "react";
import LogoSVG from "../assets/logo.svg";
import { menu, type MenuItem } from "../data/menu";
import { useBurgerMenu } from "../hooks/useBurgerMenu";
import { useTranslation } from "react-i18next";

export function FixedHeader({ onNavigate }: { onNavigate: (link: string) => void; }) {
    const { isBurgerOpen, toggleBurger, isMobile } = useBurgerMenu();
    const { t, i18n } = useTranslation();

    const handleClick = (link: string) => {
        onNavigate(link);
        if (isBurgerOpen) {
            toggleBurger();
        }
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        document.body.style.overflow = isBurgerOpen && isMobile ? "hidden" : "";
        document.body.style.height = isBurgerOpen && isMobile ? "100vh" : "";
        return () => {
            document.body.style.overflow = "";
            document.body.style.height = "";
        };
    }, [isBurgerOpen, isMobile]);

    return (
        <header className="fixed h-[81px] top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="max-w-[1376px] w-full mx-auto px-[15px] h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="flex gap-4 lg:gap-10 items-center">
                        <a href="/onus/" className="max-w-[108px] max-h-[49px] shrink-0">
                            <img src={LogoSVG} alt="logo" />
                        </a>

                        <nav className="hidden md:block">
                            <ul className="flex gap-1 justify-center">
                                {menu.map((item: MenuItem) => (
                                    <li key={item.link}>
                                        <button
                                            className="cursor-pointer px-3 lg:px-6 py-2 text-[#09090A] hover:text-blue-600 transition-colors text-sm lg:text-base font-medium whitespace-nowrap"
                                            onClick={() => handleClick(item.link)}
                                        >
                                            {t(item.name)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">

                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`px-2 py-1 cursor-pointer rounded-md text-xs font-bold transition-all ${i18n.language === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => changeLanguage('uk')}
                                className={`px-2 py-1 cursor-pointer rounded-md text-xs font-bold transition-all ${i18n.language === 'uk' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                UA
                            </button>
                        </div>

                        <div className="md:hidden flex flex-col justify-center items-center">
                            <button onClick={toggleBurger} className="group w-9 rounded-lg border-0 cursor-pointer">
                                <div className="grid justify-items-center gap-1.5">
                                    {["rotate-45 translate-y-2.5", "scale-x-0", "-rotate-45 -translate-y-2.5"].map(
                                        (cls, i) => (
                                            <span
                                                key={i}
                                                className={`h-1 w-9 bg-black rounded-full transition-all duration-500 ${isBurgerOpen ? cls : ""}`}
                                            ></span>
                                        )
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>

                    <nav
                        className={`
                            fixed top-[81px] right-0 bottom-0 w-full bg-white z-40 
                            transform transition-transform duration-300 ease-in-out
                            md:hidden
                            ${isBurgerOpen ? 'translate-x-0' : 'translate-x-full'} 
                        `}
                    >
                        <ul className="flex flex-col items-start p-6 space-y-4 h-screen overflow-auto bg-windsurf-gradient">
                            {menu.map((item: MenuItem) => (
                                <li key={item.link} className="w-full">
                                    <button
                                        className="w-full text-center font-bold text-2xl py-4 text-white hover:bg-white/10 transition-colors rounded-lg"
                                        onClick={() => handleClick(item.link)}
                                    >
                                        {t(item.name)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}