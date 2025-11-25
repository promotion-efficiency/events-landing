"use client";

import {useTranslation} from "react-i18next";
import Slider from "@/components/Slider";
import {useAppContext} from "@/context/AppContext";
import DistrictTitleCard from "@/components/DistrictTitleCard";
import DistrictCard from "@/components/DistrictCard";
import MapMiraf from "@/components/MapMiraf";
import MapCard from "@/components/MapCard";

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
export default function District() {
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
    const aboutIntroBody = (t("about.0.cards.0.body", { returnObjects: true }) as string[] | string);
    const normalizedAboutIntroBody = Array.isArray(aboutIntroBody) ? aboutIntroBody.join(" ") : aboutIntroBody;

    return (
        <Slider
            id="district"
            dir={direction}
            breakpoints={{
                0: {slidesPerView: 1, spaceBetween: 0},
                640: {slidesPerView: 1, spaceBetween: 0},
                768: {slidesPerView: 1, spaceBetween: 0},
                1024: { slidesPerView: 1.2, spaceBetween: 0 },
                1280: { slidesPerView: 1.4, spaceBetween: 0 },
            }}
            heightClass="h-auto min-h-[100vh] supports-[height:100svh]:min-h-[100svh] xl:max-h-[1000px] py-5 lg:py-14 xl:py-16"
            gsapSize={1.6}
            items={[
                <DistrictTitleCard
                    key="about-title"
                    titleLine1={t("about.0.cards.0.title.0")}
                    titleLine2={t("about.0.cards.0.title.1")}
                    titleLine3={t("about.0.cards.0.title.2")}
                    gapClass="gap-4 sm:gap-6"
                />,

                <DistrictCard
                    key="residential-top"
                    imageSrc="/images/miraf_renders-09.png"
                    imageAlt={t("about.0.cards.1.title.0")}
                    title={t("about.0.cards.1.title.0")}
                    body={t("about.0.cards.1.body")}
                    imageOnTop
                    priorityImage
                />,

                <DistrictCard
                    key="retail-bottom"
                    imageSrc="/images/cam10_open_retail_semi_bird_05.jpg"
                    imageAlt={t("about.1.cards.0.title.0")}
                    title={t("about.1.cards.0.title.0")}
                    body={t("about.1.cards.0.body")}
                    imageOnTop={false}
                />,

                <DistrictCard
                    key="hotel-top"
                    imageSrc="/images/01_cam_13_lobby hotel _02.jpg"
                    imageAlt={t("about.1.cards.1.title.0")}
                    title={t("about.1.cards.1.title.0")}
                    body={t("about.1.cards.1.body")}
                    imageOnTop
                />,

                <DistrictCard
                    key="retail-bottom-2"
                    imageSrc="/images/cam12_office landscape_view_05.jpg"
                    imageAlt={t("about.2.cards.0.title.0")}
                    title={t("about.2.cards.0.title.0")}
                    body={t("about.2.cards.0.body")}
                    imageOnTop={false}
                />,

                <DistrictCard
                    key="professional-implementation"
                    imageSrc="/images/01_cam_13_lobby hotel _02.jpg"
                    imageAlt={t("about.2.cards.1.title.0")}
                    title={t("about.2.cards.1.title.0")}
                    body={t("about.2.cards.1.body")}
                    imageOnTop
                />,
                <MapCard
                    media={<MapMiraf/>}
                    titles={{}}
                    cta={t("about.2.cards.2.cta")}
                    mediaOnTop
                />

            ]}
        />
    );

}
