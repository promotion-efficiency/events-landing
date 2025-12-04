"use client";

import {useTranslation} from "react-i18next";
import AnimatedText from "@/components/AnimatedText";

/*
|||--------------------------------------------------------------------------
||| Metrics Section
|||--------------------------------------------------------------------------
|||
||| Displays key metrics and achievements in a three-column layout.
||| Each column shows a large metric heading with a description below.
|||
*/

const metrics = [
    {
        heading: "500+ EVENTS MANAGED",
        description: "Our comprehensive event management services have successfully delivered over 500 events, ranging from corporate gatherings to large-scale exhibitions. Each event is meticulously planned and executed to exceed client expectations and create unforgettable experiences that reflect your brand's vision."
    },
    {
        heading: "200+ EXHIBITIONS ORGANIZED",
        description: "We've organized and executed more than 200 exhibitions, helping brands showcase their products and services through innovative design, strategic planning, and flawless execution. Our exhibitions drive engagement, generate leads, and deliver measurable results for our clients."
    },
    {
        heading: "100+ SATISFIED CLIENTS",
        description: "With over 100 satisfied clients across various industries, we've built lasting partnerships by consistently delivering exceptional event management and exhibition services. Our clients trust us to transform their ideas into impactful experiences that leave a lasting impression."
    }
];

export default function AboutSection() {
    return (
        <section className="bg-[#050505] text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
            <div className="container-x">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                    {/* Section Title - Left Side */}
                    <div className="md:col-span-12 lg:col-span-3 mb-6 md:mb-0">
                        <AnimatedText delay={0.1} direction="up" duration={0.8}>
                            <h2 className="text-headline text-white">
                                Achieving measurable impact with global client partners...
                            </h2>
                        </AnimatedText>
                    </div>

                    {/* Metrics Grid - Right Side */}
                    <div className="md:col-span-12 lg:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                            {metrics.map((metric, index) => (
                                <AnimatedText 
                                    key={metric.heading} 
                                    delay={0.2 + index * 0.1} 
                                    direction="up" 
                                    duration={0.8}
                                >
                            <div className={`relative pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12 pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16 min-w-0 ${index === 0 ? '' : 'border-l border-white/10'}`}>
                                {/* Metric Heading */}
                                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight uppercase break-words">
                                        {metric.heading}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-body leading-relaxed text-white/80 break-words">
                                    {metric.description}
                                </p>
                            </div>
                                </AnimatedText>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
