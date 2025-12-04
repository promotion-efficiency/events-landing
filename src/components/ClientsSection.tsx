"use client";

import {useTranslation} from "react-i18next";
import AnimatedText from "@/components/AnimatedText";

export default function ClientsSection() {
    const {t} = useTranslation();
    const clients = t("clients.list", { returnObjects: true }) as Array<{ name: string }>;

    return (
        <section id="clients" className="bg-[#F5F5F0] text-[#050505] py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="container-x">
                {/* Header Section - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <h2 className="text-headline uppercase text-[#050505] font-black tracking-tight">
                            {t("clients.title")}
                        </h2>
                    </AnimatedText>
                    <AnimatedText delay={0.2} direction="up" duration={0.8}>
                        <p className="text-body-large leading-relaxed text-[#050505]/70">
                            {t("clients.description")}
                        </p>
                    </AnimatedText>
                </div>

                {/* Clients Grid - 2 rows x 5 columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border border-[#050505]/10">
                    {clients?.slice(0, 10).map((client, index) => {
                        const isLastInRowMobile = (index + 1) % 2 === 0;
                        const isLastInRowTablet = (index + 1) % 3 === 0;
                        const isLastInRowMd = (index + 1) % 4 === 0;
                        const isLastInRow = (index + 1) % 5 === 0;
                        const isLastRow = index >= 5;
                        return (
                            <AnimatedText key={client.name} delay={0.1 + index * 0.05} direction="up" duration={0.6}>
                                <div className={`flex items-center justify-center aspect-square p-3 sm:p-4 md:p-5 border-r border-b border-[#050505]/10 ${isLastInRowMobile ? 'sm:border-r' : ''} ${isLastInRowTablet ? 'md:border-r' : ''} ${isLastInRowMd ? 'lg:border-r' : ''} ${isLastInRow ? 'lg:border-r-0' : ''} ${isLastRow ? 'border-b-0' : ''}`}>
                                    <span className="text-[#050505] text-body-small sm:text-body font-medium text-center px-1 sm:px-2">
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

