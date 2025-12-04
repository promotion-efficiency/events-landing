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
    const heroSectionRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: heroSectionRef,
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
        <section ref={heroSectionRef} className="relative flex flex-col">
            {/* Text Section - Black Background */}
            <div className="bg-[#050505] text-white">
                <Header />
                <div className="container-x py-8 sm:py-10 md:py-12 lg:py-16">
                    <div className="max-w-4xl space-y-6 sm:space-y-7 md:space-y-8">
                        {/* Headline */}
                        <div className="space-y-1 sm:space-y-2">
                            {headlineLines?.slice(0, 2).map((line, index) => (
                                <AnimatedText key={line} delay={0.2 + index * 0.1} direction="up" duration={0.9}>
                                    <h1 className="text-display uppercase text-white tracking-tight">
                                        {line}
                                    </h1>
                                </AnimatedText>
                            ))}
                        </div>

                        {/* Description Paragraph */}
                        {t("hero.body") && (
                            <AnimatedText delay={0.4} direction="up" duration={0.9}>
                                <p className="text-body-large leading-relaxed text-white/90 max-w-2xl">
                                    {t("hero.body")}
                                </p>
                            </AnimatedText>
                        )}
                    </div>
                </div>
            </div>

            {/* Video Section - Below Text */}
            <div className="relative w-screen h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] overflow-hidden -mx-[calc((100vw-100%)/2)]">
                <motion.div 
                    className="absolute inset-0"
                    style={{ scale: videoScale }}
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
        </section>
    );
}

