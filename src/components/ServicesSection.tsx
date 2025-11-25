"use client";

import {useTranslation} from "react-i18next";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
    const {t} = useTranslation();

    return (
        <section id="services" className="bg-[#050505] text-blush py-20 md:py-28">
            <div className="container-x">
                <div className="text-left space-y-5 mb-12 md:mb-16">
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <div>
                            <p className="text-[clamp(1.5rem,4vw,3rem)] leading-tight text-white/80 mb-4 font-light uppercase tracking-wide">
                                Here's what we offer you
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-3xl font-light">
                                Integrated services for organizing your institution's events or exhibitions, from needs assessment to full execution.
                            </p>
                        </div>
                    </AnimatedText>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                    {/* Event Management Column */}
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <Link 
                            href="/services/event-management"
                            className="block space-y-6 p-6"
                        >
                            <div className="relative aspect-square overflow-hidden bg-white/5">
                                <Image
                                    src="/images/cam12_office landscape_view_05.jpg"
                                    alt="Event organization and management"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-2 font-light tracking-tight">How we manage your event</h3>
                            <p className="text-sm md:text-base text-white/60">Event organization and management</p>
                        </Link>
                    </AnimatedText>

                    {/* Exhibition Services Column */}
                    <AnimatedText delay={0.2} direction="up" duration={0.8}>
                        <Link 
                            href="/services/exhibition-management"
                            className="block space-y-6 p-6"
                        >
                            <div className="relative aspect-square overflow-hidden bg-white/5">
                                <Image
                                    src="/images/cam09_retail_interior_06.jpg"
                                    alt="Exhibition organization and execution"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-2 font-light tracking-tight">How we execute the exhibition for you</h3>
                            <p className="text-sm md:text-base text-white/60">Exhibition organization and execution</p>
                        </Link>
                    </AnimatedText>
                </div>
            </div>
        </section>
    );
}

