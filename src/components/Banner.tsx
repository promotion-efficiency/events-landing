"use client";

import Header from "@/components/Header";
import {useTranslation} from "react-i18next";
import AnimatedText from "@/components/AnimatedText";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

/*
|--------------------------------------------------------------------------
| $site-header
|--------------------------------------------------------------------------
|
| Miraf top navigation (logo, links, language toggle, mobile drawer).
| - Self-manages the mobile menu state.
| - Receives `rtl` and `toggleDir` from the parent (page/layout).
|
| Usage:
|   <Header rtl={rtl} toggleDir={toggleDir} />
|
*/
export default function Banner() {
    /*
    |--------------------------------------------------------------------------
    | $i18n-translator
    |--------------------------------------------------------------------------
    | Get `t` for localized strings.
    */
    const { t } = useTranslation();
    const headlineLines = Object.values(
        t("hero.headline", { returnObjects: true }) as Record<string, string>
    );
    const videoSectionRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: videoSectionRef,
        offset: ["start end", "end start"],
    });
        const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.65]);

    /*
    |--------------------------------------------------------------------------
    | $hero-section
    |--------------------------------------------------------------------------
    |
    | Typographic hero modeled after Motto® reference:
    | - Solid black canvas
    | - Nav stays at top via <Header />
    | - Massive uppercase headline pulled from i18n hero.headline array
    | - Scroll-responsive video section below
    |
    */
    return (
        <section className="relative min-h-[100svh] bg-[#050505] text-blush flex flex-col">
            <Header />

            <div className="flex-1 flex">
                <div className="container-x flex flex-col justify-center gap-12 py-12 lg:pb-2">
                    <div className="space-y-8 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.4em] text-white/60">
                            <span>{t("hero.overline")}</span>
                            <span className="h-px w-16 bg-white/30" aria-hidden="true" />
                            <span>{t("hero.kicker")}</span>
                        </div>

                        <div className="space-y-3">
                            {headlineLines?.slice(0, 2).map((line, index) => (
                                <AnimatedText key={line} delay={0.2 + index * 0.1} direction="up" duration={0.9}>
                                    <span className="block text-[clamp(3rem,11vw,8.25rem)] leading-[0.9] uppercase font-light">{line}</span>
                                </AnimatedText>
                            ))}
                            {headlineLines?.[2] && (
                                <AnimatedText delay={0.4} direction="up" duration={0.9}>
                                    <span className="block text-[clamp(1.25rem,3vw,2rem)] leading-relaxed font-light mt-6 normal-case">{headlineLines[2]}</span>
                                </AnimatedText>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-2 pb-16 sm:pt-4 sm:pb-24">
                <div className="container-x">
                    <div className="min-h-[120vh] flex items-center">
                        <motion.div
                            ref={videoSectionRef}
                            style={{ scale: videoScale }}
                            className="w-full max-w-[120rem] mx-auto aspect-[16/9] overflow-hidden bg-black shadow-[0_40px_120px_rgba(0,0,0,0.45)] sticky top-24"
                        >
                            <video
                                className="h-full w-full object-cover"
                                src="/videos/hero.mp4?v=2"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                key="hero-video"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* About Section - Text Only */}
            <div className="bg-[#050505] py-16 sm:py-24">
                <div className="container-x">
                    <div className="max-w-4xl mx-auto text-center">
                        <AnimatedText delay={0.1} direction="up" duration={0.8}>
                            <div className="space-y-4 text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
                                {(t("about.0.cards.0.body", { returnObjects: true }) as string[]).map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </AnimatedText>
                    </div>
                </div>
            </div>
        </section>
    );
}

