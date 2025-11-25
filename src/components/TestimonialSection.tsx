"use client";

import {useTranslation} from "react-i18next";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

export default function TestimonialSection() {
    const {t} = useTranslation();

    return (
        <section id="contact" className="relative min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-[#F5F5F0]">
            {/* Background Image */}
            <div className="absolute inset-y-0 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8">
                <Image
                    src="/images/gallary/gallery5.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Left-aligned Card */}
            <div className="relative z-10 container-x h-full min-h-[80vh] md:min-h-[90vh] flex items-center">
                <div className="w-full md:w-1/2 lg:w-2/5 bg-black/85 md:bg-black/90 p-8 md:p-12 lg:p-16">
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <div className="space-y-12 md:space-y-16 ">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight pb-8">
                                {t("testimonials.title")}
                            </h2>
                            <button className="px-8 py-4 bg-white text-[#050505] font-medium text-base md:text-lg rounded-lg hover:bg-white/90 transition-colors shadow-lg">
                                {t("testimonials.cta")}
                            </button>
                        </div>
                    </AnimatedText>
                </div>
            </div>
        </section>
    );
}

