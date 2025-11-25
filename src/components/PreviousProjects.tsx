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
        <section id="portfolio" className="bg-[#050505] text-blush py-20 md:py-28">
            <div className="container-x">
                {/* Header Section */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <div>
                            <p className="text-base md:text-lg lg:text-xl uppercase tracking-[0.4em] text-white mb-4 font-light">
                                Our Portfolio
                            </p>
                        </div>
                    </AnimatedText>
                    <AnimatedText delay={0.2} direction="up" duration={0.8}>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-light">
                                We have served events from various sectors, delivering exceptional experiences that embody your vision and showcase professionalism.
                            </p>
                        </div>
                    </AnimatedText>
                </div>

                {/* Projects Grid */}
                <div className="space-y-8 md:space-y-12">
                    {/* Top Row - 3 Projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                        {topProjects.map((project, index) => (
                            <AnimatedText key={project.id} delay={0.1 + index * 0.05} direction="up" duration={0.6}>
                                <article className="space-y-4 group cursor-pointer">
                                    <div className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] overflow-hidden bg-white/5">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-base md:text-lg text-white group-hover:text-white/80 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-white/60">
                                            {project.client}
                                        </p>
                                    </div>
                                </article>
                            </AnimatedText>
                        ))}
                    </div>

                    {/* Bottom Row - 2 Projects with asymmetric width */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                        {bottomProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={index === 0 ? "md:col-span-1 lg:col-span-1" : "md:col-span-2 lg:col-span-2"}
                            >
                                <AnimatedText delay={0.2 + index * 0.05} direction="up" duration={0.6}>
                                <article className="space-y-4 group cursor-pointer">
                                    <div className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] overflow-hidden bg-white/5">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-base md:text-lg text-white group-hover:text-white/80 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-white/60">
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

