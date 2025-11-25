"use client";

import {useTranslation} from "react-i18next";
import AnimatedText from "@/components/AnimatedText";

export default function ClientsSection() {
    const {t} = useTranslation();
    const clients = t("clients.list", { returnObjects: true }) as Array<{ name: string }>;

    return (
        <section id="clients" className="bg-[#F5F5F0] text-[#050505] py-20 md:py-28">
            <div className="container-x">
                {/* Header Section - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase text-[#050505] font-bold tracking-tight">
                            {t("clients.title")}
                        </h2>
                    </AnimatedText>
                    <AnimatedText delay={0.2} direction="up" duration={0.8}>
                        <p className="text-base md:text-lg leading-relaxed text-[#050505]/70 font-light">
                            {t("clients.description")}
                        </p>
                    </AnimatedText>
                </div>

                {/* Clients Grid - 2 rows x 5 columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border border-[#050505]/10">
                    {clients?.slice(0, 10).map((client, index) => {
                        const isLastInRow = (index + 1) % 5 === 0;
                        const isLastRow = index >= 5;
                        return (
                            <AnimatedText key={client.name} delay={0.1 + index * 0.05} direction="up" duration={0.6}>
                                <div className={`flex items-center justify-center aspect-square p-4 border-r border-b border-[#050505]/10 ${isLastInRow ? 'border-r-0' : ''} ${isLastRow ? 'border-b-0' : ''}`}>
                                    <span className="text-[#050505] text-base md:text-lg font-medium text-center">
                                        {client.name}
                                    </span>
                                </div>
                            </AnimatedText>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

