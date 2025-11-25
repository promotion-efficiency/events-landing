"use client";

import {useTranslation} from "react-i18next";
import Slider from "@/components/Slider";
import {useAppContext} from "@/context/AppContext";
import ImageCard from "@/components/ImageCard";

const GALLERY_IMAGES = [
    "/images/gallary/gallary1.png",
    "/images/gallary/gallary2.png",
    "/images/gallary/gallery3.png",
    "/images/gallary/gallery4.png",
    "/images/gallary/gallery5.png",
];

/*
|--------------------------------------------------------------------------
| $about-district
|--------------------------------------------------------------------------
|
| Section describing the “About the District” part of the Miraf site.
| Contains:
| - Left column: localized title + subtitle text
| - Right column: showcase image + icon + heading + description
|
| Uses Tailwind for responsive typography and layout.
|
*/
export default function Gallery() {
    /*
    |--------------------------------------------------------------------------
    | $i18n-translator
    |--------------------------------------------------------------------------
    |
    | Retrieve the `t` function from i18next for localized strings.
    |
    */
    const {t} = useTranslation();
    const {direction,} = useAppContext();

    /*
    |--------------------------------------------------------------------------
    | $section-layout
    |--------------------------------------------------------------------------
    |
    | Two-column grid layout:
    | - Left: title and paragraph text
    | - Right: image card with caption
    | Background uses warm beige (#F3E6D6) to match Miraf branding.
    |
    */
    return (
        <Slider
            id="gallery"
            dir={direction}
            bgClass="bg-[#050505]"
            heightClass="h-[50svh] md:h-[95svh] max-h-[1000px]"
            containerClass=""
            hasFooter={true}
            isUseGSAP={false}
            breakpoints= {{
                0: { slidesPerView: 1, spaceBetween: 0 },
            }}
            items={GALLERY_IMAGES.map((image, index) => (
                <ImageCard
                    key={image}
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                />
            ))}
        />
    );

}