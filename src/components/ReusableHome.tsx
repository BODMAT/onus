import LaptopSVG from "../assets/Statistic/laptop.svg";
import CoinLeftSVG from "../assets/Statistic/coin-left.svg";
import CoinRightSVG from "../assets/Statistic/coin-right.svg";
import CoinBackSVG from "../assets/Statistic/coin-back.svg";
import { useEffect, useRef, type ReactNode } from "react";
import { useParallaxMotion } from "../hooks/useParallaxMotion";
import { motion } from "framer-motion";

type ImageRef = React.RefObject<HTMLImageElement | null>;

export function ReusableHome({ content }: { content: string | ReactNode }) {
    const { containerRef, motion: parallaxValues, isVisible } = useParallaxMotion();

    const coinLeftRef = useRef<HTMLImageElement>(null);
    const coinRightRef = useRef<HTMLImageElement>(null);
    const coinBackRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!isVisible) return;

        const depthLeft = 0.5;
        const depthRight = 0.3;
        const depthBack = 0.1;

        const applyTransform = (ref: ImageRef, depth: number) => {
            if (ref.current) {
                ref.current.style.transform = `translate3d(${parallaxValues.x * depth}px, ${parallaxValues.y * depth}px, 0)`;
            }
        };

        let frameId: number = 0;

        const updateStyles = () => {
            applyTransform(coinLeftRef, depthLeft);
            applyTransform(coinRightRef, depthRight);
            applyTransform(coinBackRef, depthBack);
            frameId = requestAnimationFrame(updateStyles);
        };

        frameId = requestAnimationFrame(updateStyles);

        return () => cancelAnimationFrame(frameId);
    }, [isVisible, parallaxValues]);

    return (
        <section className="min-h-screen bg-windsurf-gradient text-white flex items-center overflow-hidden">
            <div className="container">
                <div className="flex justify-between items-center gap-5 max-md:flex-col max-md:gap-20 max-md:mb-25 max-md:mt-10 p-5">

                    <motion.div
                        className="max-w-[460px]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {content}
                    </motion.div>

                    <motion.div
                        className="relative w-full max-w-[600px]"
                        ref={containerRef}
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            className="relative z-2 w-full h-auto block"
                            src={LaptopSVG}
                            alt="laptop"
                        />

                        <div>
                            <img
                                ref={coinBackRef}
                                className="absolute z-0 w-[25%] -top-[23%] right-[20%]"
                                src={CoinBackSVG}
                                alt="coin-back"
                            />

                            <img
                                ref={coinLeftRef}
                                className="z-3 absolute w-[25%] top-[25%] -left-[5%]"
                                src={CoinLeftSVG}
                                alt="coin-left"
                            />

                            <img
                                ref={coinRightRef}
                                className="z-3 absolute w-[35%] top-[70%] -right-[2%]"
                                src={CoinRightSVG}
                                alt="coin-right"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}