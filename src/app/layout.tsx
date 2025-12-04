import "./globals.css";
import localFont from "next/font/local";
import {AppProvider} from "@/context/AppContext";
import i18n from "i18next";
import I18nProvider from "@/providers/I18nProvider";
import LangDirEffect from "@/components/LangDirEffect";
import CustomCursor from "@/components/CustomCursor";

/*
||--------------------------------------------------------------------------
|| $metadata
||--------------------------------------------------------------------------
||
|| Global page metadata (applies to all pages unless overridden).
|| You can add title, description, and icons here.
||
*/
export const metadata = {
    title: {
        default: "Promotion Efficiency - Event Management & Exhibition Services",
        template: "%s | Promotion Efficiency"
    },
    description: "Promotion Efficiency provides comprehensive event management and exhibition services. From concept to execution, we transform your ideas into unforgettable experiences that reflect your vision and showcase professionalism.",
    keywords: [
        "Promotion Efficiency",
        "Event Management",
        "Exhibition Services",
        "Event Planning",
        "Corporate Events",
        "Exhibition Organization",
        "Event Execution",
        "Saudi Arabia Events",
        "Professional Event Management",
        "Event Services",
        "Exhibition Management",
        "Event Coordination"
    ],
    authors: [{ name: "Promotion Efficiency" }],
    creator: "Promotion Efficiency",
    publisher: "Promotion Efficiency",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://promotion-efficiency.github.io/events-landing'),
    alternates: {
        canonical: '/',
        languages: {
            'en': '/en',
            'ar': '/ar',
        },
    },
    openGraph: {
        title: "Promotion Efficiency - Event Management & Exhibition Services",
        description: "Promotion Efficiency provides comprehensive event management and exhibition services. From concept to execution, we transform your ideas into unforgettable experiences.",
        url: 'https://promotion-efficiency.github.io/events-landing',
        siteName: 'Promotion Efficiency',
        images: [
            {
                url: '/images/cam12_office landscape_view_05.jpg',
                width: 1200,
                height: 630,
                alt: 'Promotion Efficiency - Event Management & Exhibition Services',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Promotion Efficiency - Event Management & Exhibition Services",
        description: "Promotion Efficiency provides comprehensive event management and exhibition services. From concept to execution, we transform your ideas into unforgettable experiences.",
        images: ['/images/cam12_office landscape_view_05.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
}

/*
||--------------------------------------------------------------------------
|| $fonts
||--------------------------------------------------------------------------
||
|| Registers local fonts via Next.js `next/font/local` and exposes CSS
|| variables on <body> for use across the app (Tailwind/CSS).
||
|| Variables:
||   --font-gotham
||   --font-gotham-rounded
||   --font-gotham-narrow
||
*/

/*
|| Gotham — Display & UI (EN/AR)
|| variable: --font-gotham | weights: 100, 300, 400, 500, 700, 900
*/
const gotham = localFont({
    src: [
        { path: "./fonts/Gotham-Medium.otf", weight: "500", style: "normal" },
        { path: "./fonts/GothamNarrow-Black.otf", weight: "900", style: "normal" },
    ],
    variable: "--font-gotham",
    display: "swap",
});

/*
|| Gotham Rounded — Display (EN/AR)
|| variable: --font-gotham-rounded | weights: 300, 400, 500, 700
*/
const gothamRounded = localFont({
    src: [
        { path: "./fonts/gotham-rounded-medium.otf", weight: "500", style: "normal" },
        { path: "./fonts/gotham-rounded-bold.otf", weight: "900", style: "normal" },
    ],
    variable: "--font-gotham-rounded",
    display: "swap",
});

/*
|| Gotham Narrow — UI Sans (EN/AR)
|| variable: --font-gotham-narrow | weights: 100, 300, 400, 500, 700, 900
*/
const gothamNarrow = localFont({
    src: [
        { path: "./fonts/GothamNarrow-Medium.otf", weight: "500", style: "normal" },
        { path: "./fonts/GothamNarrow-Black.otf", weight: "900", style: "normal" },
    ],
    variable: "--font-gotham-narrow",
    display: "swap",
});

/*
||--------------------------------------------------------------------------
|| $root-layout
||--------------------------------------------------------------------------
||
|| Top-level layout:
|| - Wraps the app with <AppProvider> (language/context state).
|| - Sets <html lang/dir> from the current i18n language.
|| - Applies local font CSS variables on <body> for Tailwind/CSS usage.
|| - Injects <I18nProvider> so react-i18next hooks work in children.
||
*/
export default function RootLayout({ children }: { children: React.ReactNode }) {
    /*
    |--------------------------------------------------------------------------
    | $root-layout
    |--------------------------------------------------------------------------
    |
    | Composition order (top → bottom):
    | - <AppProvider>    : App-wide state (language context, etc.)
    | - <html lang/dir>  : Defaults from i18n; client sync via <LangDirEffect />
    | - <body className> : Registers local font CSS variables for Tailwind/CSS
    | - <I18nProvider>   : Enables react-i18next hooks throughout subtree
    | - <LangDirEffect>  : Keeps <html lang/dir> in sync after client switches
    | - {children}       : Page content
    |
    */
    return (
        <html lang={i18n.language || "en"} dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <body className={[gotham.variable, gothamRounded.variable, gothamNarrow.variable].join(" ")}>
        <CustomCursor />
        <AppProvider>
            <I18nProvider>
                <LangDirEffect />
                {children}
            </I18nProvider>
        </AppProvider>
        </body>
        </html>
    );
}
