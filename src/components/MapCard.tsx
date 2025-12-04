"use client";

import Image from "next/image";
import React from "react";


type MapCardProps = {
    media: React.ReactNode;
    iconSrc?: string;
    titles: { line1?: string; line2?: string; line3?: string };
    body?: string;
    cta?: string;
    mediaOnTop?: boolean;
    className?: string;
    iconAlt?: string;
};

/*
|--------------------------------------------------------------------------
| $map-card
|--------------------------------------------------------------------------
|
| Reusable card that mirrors DistrictCard but accepts arbitrary media (e.g., a map).
| Layout:
|   - Media block (fixed heights across breakpoints)
|   - Text block (icon + multi-line title + optional body)
| Toggle media position via `mediaOnTop`.
|
*/
export default function MapCard(
    {
        media,
        iconSrc,
        titles,
        body,
        cta,
        mediaOnTop = true,
        className = "",
        iconAlt = "icon",
    }: MapCardProps) {
    /*
    |--------------------------------------------------------------------------
    | $media-block
    |--------------------------------------------------------------------------
    |
    | Fixed-height, rounded container. The inner absolute wrapper ensures the
    | media fills the area (maps usually need explicit width/height).
    |
    */
    const MediaBlock = (
        <div className="relative inset-0">
            {media}
        </div>
    );

    /*
    |--------------------------------------------------------------------------
    | $text-block
    |--------------------------------------------------------------------------
    */
    const TextBlock = (
        <div className="text-blush px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium leading-tight text-center">
                {titles.line1 ? <span className="block">{titles.line1}</span> : null}
                <span className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 rtl:mr-4 rtl:sm:mr-6 rtl:md:mr-10 rtl:lg:mr-20 rtl:xl:mr-36 ltr:ml-4 ltr:sm:ml-6 ltr:md:ml-10 ltr:lg:ml-20 ltr:xl:ml-36">
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            alt={iconAlt || "icon"}
                            width={96}
                            height={96}
                            className="inline-block h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 object-contain"
                        />
                    )}
                    {titles.line2 ? <span className="block">{titles.line2}</span> : null}
                </span>
                {titles.line3 ? <span className="block font-medium">{titles.line3}</span> : null}
            </h2>
            {body ? (
                <p className="mt-3 sm:mt-4 md:mt-5 ltr:max-w-[45ch] rtl:max-w-[38ch] font-black text-blush/80 text-body leading-relaxed mx-auto">
                    {body}
                </p>
            ) : null}
            {cta ? (
                <div className="mt-4 sm:mt-5 md:mt-6 flex justify-center">
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#050505] font-medium text-body sm:text-body-large rounded hover:bg-white/90 transition-colors min-h-[44px] flex items-center justify-center">
                        {cta}
                    </button>
                </div>
            ) : null}
        </div>
    );

    /*
    |--------------------------------------------------------------------------
    | $render
    |--------------------------------------------------------------------------
    */
    return (
        <div className={`w-full h-full flex flex-col justify-center ${className} ms-0 lg:ms-6 xl:ms-10 px-2 sm:px-4 md:px-6`}>
            {mediaOnTop ? (
                <>
                    {MediaBlock}
                    <div className="mt-4 sm:mt-6 md:mt-8">{TextBlock}</div>
                </>
            ) : (
                <>
                    <div className="mb-4 sm:mb-6 md:mb-8">{TextBlock}</div>
                    {MediaBlock}
                </>
            )}
        </div>
    );
}