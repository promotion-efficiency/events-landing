"use client";

import Header from "@/components/Header";
import Link from "next/link";

const EVENT_SERVICES_LIST = [
    { title: "Innovating the event idea", description: "We transform your vision into a compelling event concept that resonates with your audience and achieves your objectives." },
    { title: "Building an integrated creative concept", description: "Our team develops cohesive creative concepts that seamlessly integrate all aspects of your event for a unified experience." },
    { title: "Developing visual identity and marketing plan", description: "We create distinctive visual identities and comprehensive marketing strategies that amplify your event's presence and impact." },
    { title: "Event organization and management", description: "End-to-end event management services ensuring seamless execution from planning to post-event analysis." },
    { title: "Crowd and registration management", description: "Efficient registration systems and crowd management solutions that ensure smooth attendee experience and safety." },
    { title: "Technical execution", description: "State-of-the-art technical production services including audio, video, lighting, and staging for unforgettable events." },
];

const EXHIBITION_SERVICES_LIST = [
    { title: "Innovating the exhibition idea", description: "We conceptualize innovative exhibition experiences that engage visitors and effectively communicate your message." },
    { title: "Building an integrated creative concept", description: "Comprehensive creative concepts that unify all exhibition elements into a cohesive and impactful experience." },
    { title: "Developing the visual identity", description: "Distinctive visual identities that capture your brand essence and create memorable exhibition experiences." },
    { title: "Exhibition organization and management", description: "Complete exhibition management services covering all aspects from initial planning to final execution." },
    { title: "Technical execution", description: "Professional technical services for exhibitions including AV systems, interactive displays, and infrastructure setup." },
];

const SERVICE_DETAILS: Record<string, { title: string; description: string; features: string[]; services?: Array<{ title: string; description: string }> }> = {
    "event-idea": {
        title: "Innovating the event idea",
        description: "We transform your vision into a compelling event concept that resonates with your audience and achieves your objectives.",
        features: [
            "Strategic concept development",
            "Audience analysis and targeting",
            "Creative brainstorming sessions",
            "Concept validation and refinement",
            "Theme and narrative development"
        ]
    },
    "creative-concept": {
        title: "Building an integrated creative concept",
        description: "Our team develops cohesive creative concepts that seamlessly integrate all aspects of your event for a unified experience.",
        features: [
            "Holistic design approach",
            "Brand alignment and consistency",
            "Multi-channel integration",
            "Visual and experiential storytelling",
            "Creative direction and guidelines"
        ]
    },
    "visual-identity": {
        title: "Developing visual identity and marketing plan",
        description: "We create distinctive visual identities and comprehensive marketing strategies that amplify your event's presence and impact.",
        features: [
            "Logo and brand identity design",
            "Marketing strategy development",
            "Digital and print collateral",
            "Social media campaigns",
            "Content creation and distribution"
        ]
    },
    "event-management": {
        title: "How we manage your event",
        description: "End-to-end event management services ensuring seamless execution from planning to post-event analysis. Our comprehensive approach covers every aspect of your event.",
        features: [
            "Comprehensive event planning",
            "Vendor coordination and management",
            "Timeline and logistics management",
            "On-site event coordination",
            "Post-event evaluation and reporting"
        ],
        services: EVENT_SERVICES_LIST
    },
    "crowd-management": {
        title: "Crowd and registration management",
        description: "Efficient registration systems and crowd management solutions that ensure smooth attendee experience and safety.",
        features: [
            "Registration platform setup",
            "Attendee check-in systems",
            "Crowd flow optimization",
            "Security and safety protocols",
            "Real-time monitoring and adjustments"
        ]
    },
    "technical-execution": {
        title: "Technical execution",
        description: "State-of-the-art technical production services including audio, video, lighting, and staging for unforgettable events.",
        features: [
            "Audio-visual production",
            "Lighting design and setup",
            "Stage and set construction",
            "Live streaming capabilities",
            "Technical support and troubleshooting"
        ]
    },
    "exhibition-idea": {
        title: "Innovating the exhibition idea",
        description: "We conceptualize innovative exhibition experiences that engage visitors and effectively communicate your message.",
        features: [
            "Exhibition concept development",
            "Space planning and layout design",
            "Interactive experience design",
            "Visitor journey mapping",
            "Concept presentation and refinement"
        ]
    },
    "exhibition-concept": {
        title: "Building an integrated creative concept",
        description: "Comprehensive creative concepts that unify all exhibition elements into a cohesive and impactful experience.",
        features: [
            "Integrated design approach",
            "Brand storytelling",
            "Spatial design and flow",
            "Content strategy development",
            "Creative direction and execution"
        ]
    },
    "exhibition-identity": {
        title: "Developing the visual identity",
        description: "Distinctive visual identities that capture your brand essence and create memorable exhibition experiences.",
        features: [
            "Brand identity design",
            "Exhibition graphics and signage",
            "Wayfinding and navigation systems",
            "Digital display design",
            "Brand consistency across touchpoints"
        ]
    },
    "exhibition-management": {
        title: "How we execute the exhibition for you",
        description: "Complete exhibition management services covering all aspects from initial planning to final execution. We ensure every detail reflects your vision.",
        features: [
            "Exhibition planning and coordination",
            "Booth and space management",
            "Vendor and contractor coordination",
            "Installation and dismantling",
            "Project management and oversight"
        ],
        services: EXHIBITION_SERVICES_LIST
    },
    "exhibition-technical": {
        title: "Technical execution",
        description: "Professional technical services for exhibitions including AV systems, interactive displays, and infrastructure setup.",
        features: [
            "Technical infrastructure setup",
            "Interactive display systems",
            "Audio-visual integration",
            "Network and connectivity solutions",
            "Technical maintenance and support"
        ]
    }
};

type ServiceDetailClientProps = {
    slug: string;
};

export default function ServiceDetailClient({ slug }: ServiceDetailClientProps) {
    const service = SERVICE_DETAILS[slug];

    if (!service) {
        return (
            <div className="min-h-screen bg-[#050505] text-blush flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl mb-4">Service not found</h1>
                    <Link href="/" className="text-white/60 hover:text-white underline">
                        Return to home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] text-blush">
            <Header />
            <div className="container-x py-20 md:py-28">
                <Link href="/" className="inline-block mb-8 text-white/60 hover:text-white transition-colors">
                    ← Back to services
                </Link>
                
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">{service.title}</h1>
                    <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
                        {service.description}
                    </p>
                    
                    {service.services && (
                        <div className="space-y-8 mb-12">
                            <h2 className="text-2xl md:text-3xl mb-6">Our Services:</h2>
                            <div className="space-y-6">
                                {service.services.map((item, index) => (
                                    <div key={index} className="border-b border-white/10 pb-6 last:border-0">
                                        <h3 className="text-xl md:text-2xl mb-2">{item.title}</h3>
                                        <p className="text-base md:text-lg text-white/70 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl mb-6">What's included:</h2>
                        <ul className="space-y-3">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-white/80 mt-1">•</span>
                                    <span className="text-base md:text-lg text-white/70 leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

