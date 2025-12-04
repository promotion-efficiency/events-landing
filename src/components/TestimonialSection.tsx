"use client";

import {useTranslation} from "react-i18next";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

export default function TestimonialSection() {
    const {t} = useTranslation();

    return (
        <section id="contact" className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-[#F5F5F0]">
            {/* Background Image */}
            <div className="absolute inset-y-0 left-2 right-2 sm:left-4 sm:right-4 md:left-6 md:right-6 lg:left-8 lg:right-8">
                <Image
                    src="/images/gallary/gallery5.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Left-aligned Card */}
            <div className="relative z-10 container-x h-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center py-8 sm:py-12 md:py-16">
                <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-black/85 md:bg-black/90 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                            <h2 className="text-headline font-black text-white leading-tight pb-6 sm:pb-7 md:pb-8">
                                {t("testimonials.title")}
                            </h2>
                            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#050505] font-medium text-body sm:text-body-large rounded-lg hover:bg-white/90 transition-colors shadow-lg min-h-[44px] flex items-center justify-center">
                                {t("testimonials.cta")}
                            </button>
                        </div>
                    </AnimatedText>
                </div>
            </div>
        </section>
    );
}

