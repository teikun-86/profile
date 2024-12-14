import { useResource } from "@/contexts/ResourcesContext";
import React, { useState, useEffect } from "react";

interface FetchImageProps {
    src: string; // URL of the image to fetch
    alt: string; // Alt text for the image
    fallbackSrc?: string; // Optional fallback image URL
    className?: string; // Additional CSS classes for the image
}

const FetchImage: React.FC<FetchImageProps> = ({
    src,
    alt,
    fallbackSrc,
    className,
}) => {
    const [currentSrc, setCurrentSrc] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    const { addResource, updateResource } = useResource();

    useEffect(() => {
        const resourceName = src;

        // Add the resource to the context
        addResource({
            name: resourceName,
            isLoaded: false,
            initializedAt: new Date(),
            type: "image",
        });

        const fetchImage = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `/_next/image?url=${encodeURI(src)}&w=768&h=768&q=80`
                );

                if (!response.ok) {
                    throw new Error(
                        `Failed to load image: ${response.statusText}`
                    );
                }

                const blob = await response.blob();
                const reader = new FileReader();

                reader.onloadend = () => {
                    setCurrentSrc(reader.result as string);
                    setLoading(false);

                    // Update the resource to mark it as loaded
                    updateResource(resourceName, {
                        isLoaded: true,
                        loadedAt: new Date(),
                    });
                };

                reader.readAsDataURL(blob);
            } catch (error) {
                console.error(error);
                setCurrentSrc(fallbackSrc); // Use fallbackSrc if provided
                setLoading(false);

                // Update the resource to mark it as failed
                updateResource(resourceName, {
                    isLoaded: false,
                });
            }
        };

        fetchImage();
    }, [src, fallbackSrc]);

    if (!currentSrc && !fallbackSrc) {
        // Don't render the image if no fallback and fetch fails
        return null;
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={currentSrc || fallbackSrc} // Render currentSrc or fallbackSrc
            alt={alt}
            className={`${className} ${loading ? "opacity-50" : ""}`} // Add a subtle effect while loading
        />
    );
};

export default FetchImage;
