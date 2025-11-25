"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

/*
|------------------------------------------------------------------------------
| $footer:props
|------------------------------------------------------------------------------
| Component Props:
| - className   : optional wrapper class (for external layout control)
| - bgClass     : background color class (default: blush tone)
| - textClass   : text color class (default: burgundy tone)
|------------------------------------------------------------------------------
*/
type FooterProps = {
    className?: string;
    bgClass?: string;
    textClass?: string;
};

/*
|------------------------------------------------------------------------------
| $footer:component
|------------------------------------------------------------------------------
| Main Footer component for the Miraf website.
|
| Structure:
| - 3 responsive columns (stacked on mobile, horizontal on md+)
| - Left   : Navigation links (translated)
| - Center : Social icons + contact information
| - Right  : Postal & street addresses
|
| Features:
| - i18n-ready using `t()` for dynamic translation
| - Configurable via Tailwind classes (bgClass, textClass, className)
| - Accessible SVG-based social icons with hover states
|------------------------------------------------------------------------------
*/
export default function Footer(
    {
        bgClass = "bg-[#F5F5F0]",
        textClass = "text-[#050505]",
        className = "",
    }: FooterProps)
{

    /*
    |--------------------------------------------------------------------------
    | $i18n-translator
    |--------------------------------------------------------------------------
    | Retrieve localized strings from i18next.
    | The `t()` function pulls translated labels from your locale JSON files.
    |--------------------------------------------------------------------------
    */
    const { t } = useTranslation();

    /*
    |--------------------------------------------------------------------------
    | $footer-content
    |--------------------------------------------------------------------------
    | Define all static and localized footer content:
    | - nav           : navigation links (translated)
    | - email/phone   : contact info
    | - socials       : external social media URLs
    | - addressPostal : first address group (postal)
    | - addressStreet : second address group (street)
    |--------------------------------------------------------------------------
    */
    const nav = [
        { label: t("footer.nav.services"), href: "#services" },
        { label: t("footer.nav.district"), href: "#district" },
        { label: t("footer.nav.portfolio"), href: "#portfolio" },
        { label: t("footer.nav.gallery"), href: "#gallery" },
        { label: t("footer.nav.clients"), href: "#clients" },
        { label: t("footer.nav.contact"), href: "#contact" },
    ];

    /*
    |--------------------------------------------------------------------------
    | $component-render
    |--------------------------------------------------------------------------
    | Layout structure:
    | - 3-column responsive design (stacked on mobile)
    | - Left   : navigation links
    | - Center : social icons + email/phone
    | - Right  : postal & street addresses
    |--------------------------------------------------------------------------
    */
    return (
        <footer className={`${bgClass} ${textClass} ${className} font-gotham`}>
            <div className="container-x">
                {/* Divider Line */}
                <div className="border-t border-[#050505]/10" />

                {/* Content Section */}
                <div className="py-8 md:py-10">
                    <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-16">
                        {/*
                        |----------------------------------------------------------
                        | Left: Tagline, Social Icons, Copyright
                        |----------------------------------------------------------
                        */}
                        <div className="flex-1 space-y-4">
                            {/* Logo */}
                            <div className="mb-2 no-logo-hover">
                                <Image 
                                    src="/icons/logo.png" 
                                    alt="Logo" 
                                    width={80} 
                                    height={40} 
                                    className="h-15 w-auto object-contain"
                                />
                            </div>

                            {/* Tagline */}
                            <h3 className="text-xl md:text-2xl text-[#050505] font-medium pt-6">
                                {t("footer.tagline")}
                            </h3>

                            {/* Copyright */}
                            <p className="text-sm text-[#050505]/60">
                                {t("footer.copyright")}
                            </p>
                        </div>

                        {/*
                        |----------------------------------------------------------
                        | Right: Navigation Links
                        |----------------------------------------------------------
                        */}
                        <nav className="flex-1 lg:text-right">
                            <ul className="space-y-3 text-xl leading-7">
                                {nav.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="relative text-[#050505] hover:text-[#050505]/80 transition-colors duration-300 group inline-block"
                                        >
                                            {item.label}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#050505]/70 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}