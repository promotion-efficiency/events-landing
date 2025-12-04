"use client";

import {useTranslation} from "react-i18next";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
    const {t} = useTranslation();

    return (
        <section id="services" className="bg-[#050505] text-blush py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="container-x">
                <div className="text-left space-y-4 sm:space-y-5 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <AnimatedText delay={0} direction="up" duration={0.6}>
                        <div>
                            <h2 className="text-headline leading-tight text-white/80 mb-3 sm:mb-4 uppercase tracking-wide">
                                Here's what we offer you
                            </h2>
                            <p className="text-body-large leading-relaxed text-white/70 max-w-3xl">
                                Integrated services for organizing your institution's events or exhibitions, from needs assessment to full execution.
                            </p>
                        </div>
                    </AnimatedText>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                    {/* Event Management Column */}
                    <AnimatedText delay={0.3} direction="up" duration={0.8}>
                        <Link 
                            href="/services/event-management"
                            className="block space-y-3 sm:space-y-4 p-3 sm:p-4 md:p-5 hover:opacity-90 transition-opacity"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-white/5 rounded-sm">
                                <Image
                                    src="/images/cam12_office landscape_view_05.jpg"
                                    alt="Event organization and management"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-subheadline mb-1 sm:mb-2 tracking-tight">How we <span className="font-black">manage</span> your event</h3>
                            <p className="text-caption text-white/60">Event organization and management</p>
                        </Link>
                    </AnimatedText>

                    {/* Exhibition Services Column */}
                    <AnimatedText delay={0.4} direction="up" duration={0.8}>
                        <Link 
                            href="/services/exhibition-management"
                            className="block space-y-3 sm:space-y-4 p-3 sm:p-4 md:p-5 hover:opacity-90 transition-opacity"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-white/5 rounded-sm">
                                <Image
                                    src="/images/cam09_retail_interior_06.jpg"
                                    alt="Exhibition organization and execution"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-subheadline mb-1 sm:mb-2 tracking-tight">How we <span className="font-black">execute</span> the exhibition for you</h3>
                            <p className="text-caption text-white/60">Exhibition organization and execution</p>
                        </Link>
                    </AnimatedText>
                </div>
            </div>
        </section>
    );
}

