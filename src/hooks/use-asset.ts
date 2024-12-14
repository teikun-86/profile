import { useResource } from "@/contexts/ResourcesContext";

interface UseAsset {
    loadAsset: (url: string, type: string, callback: (result: string) => void) => Promise<void>;
}

export const useAsset = (): UseAsset => {
    const { addResource, updateResource } = useResource();
    
    const loadAsset = async (url: string, type: string, callback: (result: string) => void ): Promise<void> => {
        addResource({
            isLoaded: false,
            name: url,
            type,
        });
        const response = await fetch(
            `/_next/image?url=${encodeURI(url)}&w=768&h=768&q=80`
        );
        if (!response.ok) {
            throw new Error(`Failed to load asset: ${response.statusText}`);
        }

        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {

            callback(reader.result as string);
            
            // Update the resource to mark it as loaded
            updateResource(url, {
                isLoaded: true,
                loadedAt: new Date(),
            });
        };

        reader.readAsDataURL(blob);
    }

    return {
        loadAsset
    }
}