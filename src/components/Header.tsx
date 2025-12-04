"use client";

import Image from "next/image";
import {useState} from "react";
import { useTranslation } from "react-i18next";
import {useAppContext} from "@/context/AppContext";
import Link from "next/link";

/*
|--------------------------------------------------------------------------
| $site-header
|--------------------------------------------------------------------------
|
| Miraf top navigation (logo, links, language toggle, mobile drawer).
| - Self-manages the mobile menu state.
| - Receives `rtl` and `toggleDir` from the parent (page/layout).
|
| Usage:
|   <Header rtl={rtl} toggleDir={toggleDir} />
|
*/
export default function Header() {
    /*
    |--------------------------------------------------------------------------
    | $nav-state & $i18n-handlers
    |--------------------------------------------------------------------------
    | - `t`                 : translator bound to current language (react-i18next)
    | - `selectedLanguage`  : current app language from context ("en" | "ar")
    | - `setSelectedLanguage`: toggles language via context (updates i18next)
    | - `menuOpen`          : mobile drawer state
    | - `rtl`               : local UI flag (optional if you derive from language)
    | - `handleLanguageSelection`: toggles between "en" and "ar"
    */
    const { t } = useTranslation();
    const { selectedLanguage, setSelectedLanguage } = useAppContext();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleLanguageSelection = (lang: string|null) => {
        setSelectedLanguage(lang === "ar" ? "en" : "ar");
    };

    /*
    |--------------------------------------------------------------------------
    | $site-header
    |--------------------------------------------------------------------------
    |
    | Miraf top navigation (logo, localized links, language toggle, mobile drawer).
    | - Uses Tailwind `container` for width/padding.
    | - Desktop: inline nav; Mobile: hamburger → overlay drawer.
    | - Language toggle calls `handleLanguageSelection(selectedLanguage)`.
    |
    */
    return (
        <header className="relative z-100">
            <div className="container-x">
                <div className="flex items-center justify-between w-full py-3 sm:py-4 md:py-5">
                    {/* Logo */}
                    <a href="#" className="flex items-center select-none no-logo-hover">
                        <Image src="/icons/logo.png" alt="Promotion Efficiency Logo" width={100} height={60} priority className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 object-contain"/>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-body font-medium">
                        <Link href="/#services" className="relative text-white hover:text-blush transition-colors duration-300 group">
                            {t("nav.services")}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blush transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/#district" className="relative text-white hover:text-blush transition-colors duration-300 group">
                            {t("nav.district")}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blush transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/#portfolio" className="relative text-white hover:text-blush transition-colors duration-300 group">
                            {t("nav.portfolio")}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blush transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/#gallery" className="relative text-white hover:text-blush transition-colors duration-300 group">
                            {t("nav.gallery")}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blush transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/#clients" className="relative text-white hover:text-blush transition-colors duration-300 group">
                            {t("nav.clients")}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blush transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/#contact" className="rounded-full border border-white/40 px-4 py-2 hover:bg-white/10 hover:border-blush/60 hover:text-blush transition-all duration-300">
                            {t("nav.contact")}
                        </Link>
                        <button
                            onClick={() => handleLanguageSelection(selectedLanguage)}
                            className={`cursor-pointer text-white hover:text-blush transition-colors duration-300 bold ${selectedLanguage === 'ar' ? "en-display" : "ar-display"}`}>
                            {selectedLanguage === 'ar' ? "En" : "عربي"}
                        </button>
                    </nav>

                    {/* Mobile button */}
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        className="lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 sm:p-3 bg-white/10 ring-1 ring-white/15 backdrop-blur min-w-[44px] min-h-[44px]"
                        aria-label="Open menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" className="h-6 w-6 sm:h-7 sm:w-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Sidebar (mobile) */}
            <div className={`fixed inset-y-0 left-0 z-40 w-[280px] sm:w-80 bg-[rgba(74,17,18,0.92)] backdrop-blur-md ring-1 ring-white/10 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="px-6 py-6 sm:py-8 space-y-2 sm:space-y-3 text-body text-white h-full overflow-y-auto">
                    <Link className="block py-3 sm:py-3.5 text-white hover:text-blush transition-colors duration-300 min-h-[44px] flex items-center" href="/#services" onClick={() => setMenuOpen(false)}>{t("nav.services")}</Link>
                    <Link className="block py-3 sm:py-3.5 text-white hover:text-blush transition-colors duration-300 min-h-[44px] flex items-center" href="/#district" onClick={() => setMenuOpen(false)}>{t("nav.district")}</Link>
                    <Link className="block py-3 sm:py-3.5 text-white hover:text-blush transition-colors duration-300 min-h-[44px] flex items-center" href="/#portfolio" onClick={() => setMenuOpen(false)}>{t("nav.portfolio")}</Link>
                    <Link className="block py-3 sm:py-3.5 text-white hover:text-blush transition-colors duration-300 min-h-[44px] flex items-center" href="/#gallery" onClick={() => setMenuOpen(false)}>{t("nav.gallery")}</Link>
                    <Link className="block py-3 sm:py-3.5 text-white hover:text-blush transition-colors duration-300 min-h-[44px] flex items-center" href="/#clients" onClick={() => setMenuOpen(false)}>{t("nav.clients")}</Link>
                    <Link className="block py-3 sm:py-3.5 text-white hover:text-blush transition-colors duration-300 min-h-[44px] flex items-center" href="/#contact" onClick={() => setMenuOpen(false)}>{t("nav.contact")}</Link>

                    <button
                        className={`mt-4 sm:mt-6 w-full rounded-full border border-white/20 px-4 py-3 sm:py-3.5 text-white hover:text-blush hover:border-blush/60 transition-all duration-300 min-h-[44px] flex items-center justify-center ${selectedLanguage === 'ar' ? "en-display" : "ar-display"}`}
                        onClick={() => {
                            handleLanguageSelection(selectedLanguage)
                            setMenuOpen(false);
                        }}>
                        {selectedLanguage === 'ar' ? "En" : "عربي"}
                    </button>
                </div>
            </div>

            {/* Overlay when sidebar open */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    );
}
