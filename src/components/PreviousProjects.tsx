"use client";

import AnimatedText from "@/components/AnimatedText";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
    {
        id: "event1",
        image: "/images/projects/project1.png",
        title: "Corporate Conference & Exhibition",
        client: "Ministry of Culture",
    },
    {
        id: "event2",
        image: "/images/projects/project2.png",
        title: "Heritage Festival Launch",
        client: "Heritage Commission",
    },
    {
        id: "event3",
        image: "/images/projects/project3.png",
        title: "Educational Summit",
        client: "Ministry of Education",
    },
    {
        id: "event4",
        image: "/images/projects/project4.png",
        title: "Culinary Arts Exhibition",
        client: "Culinary Arts Commission",
    },
    {
        id: "event5",
        image: "/images/projects/project5.png",
        title: "Corporate Gala Event",
        client: "Saudi Cement",
    },
];

export default function PreviousProjects() {
    const {t} = useTranslation();
    const topProjects = PROJECTS.slice(0, 3);
    const bottomProjects = PROJECTS.slice(3, 5);

    return (
        <section id="portfolio" className="bg-[#050505] text-blush py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="container-x">
                {/* Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <div>
                            <p className="text-label uppercase tracking-[0.4em] text-white mb-3 sm:mb-4 font-medium">
                                Our Portfolio
                            </p>
                        </div>
                    </AnimatedText>
                    <AnimatedText delay={0.2} direction="up" duration={0.8}>
                        <div className="space-y-4 sm:space-y-6">
                            <p className="text-body-large leading-relaxed text-white/80">
                                We have served events from various sectors, delivering exceptional experiences that embody your vision and showcase professionalism.
                            </p>
                        </div>
                    </AnimatedText>
                </div>

                {/* Projects Grid */}
                <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                    {/* Top Row - 3 Projects */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                        {topProjects.map((project, index) => (
                            <AnimatedText key={project.id} delay={0.1 + index * 0.05} direction="up" duration={0.6}>
                                <article className="space-y-3 sm:space-y-4 group cursor-pointer">
                                    <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] overflow-hidden bg-white/5 rounded-sm">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-body sm:text-body-large text-white group-hover:text-white/80 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-body-small text-white/60">
                                            {project.client}
                                        </p>
                                    </div>
                                </article>
                            </AnimatedText>
                        ))}
                    </div>

                    {/* Bottom Row - 2 Projects with asymmetric width */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                        {bottomProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={index === 0 ? "sm:col-span-1 lg:col-span-1" : "sm:col-span-1 lg:col-span-2"}
                            >
                                <AnimatedText delay={0.2 + index * 0.05} direction="up" duration={0.6}>
                                <article className="space-y-3 sm:space-y-4 group cursor-pointer">
                                    <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] overflow-hidden bg-white/5 rounded-sm">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-body sm:text-body-large text-white group-hover:text-white/80 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-body-small text-white/60">
                                                {project.client}
                                            </p>
                                        </div>
                                    </article>
                                </AnimatedText>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

