import { ComponentMap, menu, type MenuItem } from "../data/menu";
import { FixedHeader } from "./FixedHeader";
import { useScrollToSection } from '../hooks/useScrollToSection';
import { ReusableHome } from "./ReusableHome";
import { Footer } from "./Footer";
import { useTranslation } from "react-i18next";

const HEADER_HEIGHT = 81;

export function App() {
  const scrollToSection = useScrollToSection(HEADER_HEIGHT);
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <FixedHeader onNavigate={scrollToSection} />
      <main
        style={{
          paddingTop: `${HEADER_HEIGHT}px`
        }}
      >
        <ReusableHome content={
          <>
            <h1 className="text-[64px] font-bold leading-[120%] mb-4 max-md:text-center max-md:text-[40px]">
              {t('hero.title')}
            </h1>
            <p className="text-[20px] leading-[160%] font-medium max-md:text-center max-md:text-[16px]">

              {t('hero.subtitle')}
            </p>
          </>
        } />

        {menu.map((item: MenuItem) => {
          const DynamicComponent = ComponentMap[item.link];
          return (
            <section id={item.link} key={item.link}>
              <DynamicComponent />
            </section>
          );
        })}

        <ReusableHome content={
          <h1 className="text-[64px] font-bold leading-[120%] mb-4 max-md:text-center max-md:text-[40px]">
            {t('hero.title')}
          </h1>
        } />
      </main>
      <Footer />
    </div>
  )
}