"use client";

import { useResource } from "@/contexts/ResourcesContext";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

const LoadWhenAllResourcesLoaded = ({ children }: { children?: React.ReactNode }) => {
    const {state: resourceState} = useResource();
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (resourceState.allLoaded) {
            document.body.classList.add("__resourcesLoaded");
            setLoaded(true);
        }
    }, [resourceState.allLoaded])
    
    return (
        <>
            <Transition
                show={!loaded}
                enter="transition-opacity duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 w-full h-screen grid place-items-center z-[1000] bg-gradient-to-r from-black/70 via-black/50 to-black/70 backdrop-blur">
                    <p className="text-center text-white animate-bounce">Loading resources ...</p>
                </div>
            </Transition>
            {children}
        </>
    )
};

export default LoadWhenAllResourcesLoaded;