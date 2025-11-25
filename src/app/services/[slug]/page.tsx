import ServiceDetailClient from "./ServiceDetailClient";

const SERVICE_SLUGS = [
    "event-idea",
    "creative-concept",
    "visual-identity",
    "event-management",
    "crowd-management",
    "technical-execution",
    "exhibition-idea",
    "exhibition-concept",
    "exhibition-identity",
    "exhibition-management",
    "exhibition-technical"
];

export function generateStaticParams() {
    return SERVICE_SLUGS.map((slug) => ({
        slug: slug,
    }));
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    return <ServiceDetailClient slug={slug} />;
}

