"use client";

import Banner from "@/components/Banner";
import PreviousProjects from "@/components/PreviousProjects";
import ServicesSection from "@/components/ServicesSection";
import District from "@/components/District";
import Gallery from "@/components/Gallery";
import ClientsSection from "@/components/ClientsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

/*
|--------------------------------------------------------------------------
| Home Page
|--------------------------------------------------------------------------
|
| Lightweight page that renders the hero Banner component.
| Keep this file minimal; put layout/SEO in app/layout.tsx and
| encapsulate hero logic inside <Banner />.
|
*/
export default function HomePage() {
    /*
    |------------------------------------------------------------------------------
    | $page-render
    |------------------------------------------------------------------------------
    | Renders the main structure of the landing page.
    |------------------------------------------------------------------------------
    |
    | - Wraps all major homepage sections inside a <main> container.
    | - Sequentially composes the full layout:
    |     → Banner: hero introduction
    |     → ServicesSection: services overview
    |     → District: how we work
    |     → PreviousProjects: portfolio showcase
    |     → Gallery: image showcase
    |     → ClientsSection: clients showcase
    |     → TestimonialSection: CTA section
    |     → Footer: bottom navigation + contact details
    | - Ensures consistent structure across Arabic and English layouts.
    |
    */
    return (
        <>
            <StructuredData />
            <main>
                {/* Primary hero section */}
                <Banner/>
                <ServicesSection/>
                <District/>
                <PreviousProjects/>
                <Gallery/>
                <ClientsSection/>
                <TestimonialSection/>
                <Footer/>
            </main>
        </>
    );
}
