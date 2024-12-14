import { useResource } from "@/contexts/ResourcesContext";
import React, { useState, useEffect } from "react";

interface FetchImageProps {
    src: string;
    alt: string;
    fallbackSrc?: string;
    className?: string;
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

                    updateResource(resourceName, {
                        isLoaded: true,
                        loadedAt: new Date(),
                    });
                };

                reader.readAsDataURL(blob);
            } catch (error) {
                console.error(error);
                setCurrentSrc(fallbackSrc);
                setLoading(false);

                updateResource(resourceName, {
                    isLoaded: false,
                });
            }
        };

        fetchImage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src, fallbackSrc]);

    if (!currentSrc && !fallbackSrc) {
        return null;
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={currentSrc || fallbackSrc}
            alt={alt}
            className={`${className} ${loading ? "opacity-50" : ""}`}
        />
    );
};

export default FetchImage;
