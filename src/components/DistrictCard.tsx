"use client";

import Image from "next/image";

type AboutCardProps = {
    imageSrc: string;
    imageAlt: string;
    iconSrc?: string;
    title: string;
    body: string;
    imageOnTop?: boolean;
    priorityImage?: boolean;
    className?: string;
    bodyWidth?: string;
};

export default function DistrictCard({
                                         imageSrc,
                                         imageAlt,
                                         iconSrc,
                                         title,
                                         body,
                                         imageOnTop = true,
                                         priorityImage = false,
                                         className = "",
                                         bodyWidth = 'ltr:max-w-[45ch] rtl:max-w-[36ch]',
                                     }: AboutCardProps) {

    /*
    |-----------------------------------------------------------------------
    | Image Block
    |-----------------------------------------------------------------------
    | Uses aspect-ratio to maintain image proportions.
    | No fixed height in `svh`. Image shrinks naturally on small screens.
    */
    const ImageBlock = (
        <div className="relative w-full overflow-hidden aspect-[16/10]">
            <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-cover"
                priority={priorityImage}
            />
        </div>
    );

    /*
    |-----------------------------------------------------------------------
    | Text Block
    |-----------------------------------------------------------------------
    | Icon + title + body
    | Body width constrained for readability.
    */
    const TextBlock = (
        <div className="text-blush px-4 sm:px-6 md:px-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
                {title}
            </h3>
            <p className={`mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-blush/80 text-body leading-relaxed ${bodyWidth}`}>
                {body}
            </p>
        </div>
    );

    /*
    |-----------------------------------------------------------------------
    | Render
    |-----------------------------------------------------------------------
    | Flexible layout:
    | - Image and text flow naturally
    | - No fixed heights
    | - Works on very short screens
    */
    return (
        <div className={`flex flex-col w-full justify-center ${className}`}>
            <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[95svh] sm:max-w-[90svh] md:max-w-full lg:max-w-[80svh] mx-auto px-2 sm:px-4 md:px-6">
                {imageOnTop ? (
                    <>
                        {ImageBlock}
                        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">{TextBlock}</div>
                    </>
                ) : (
                    <>
                        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">{TextBlock}</div>
                        {ImageBlock}
                    </>
                )}
            </div>
        </div>
    );
}
