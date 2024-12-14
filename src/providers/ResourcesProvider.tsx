"use client";

import { Resource, ResourceContext, resourceReducer, ResourceState } from "@/contexts/ResourcesContext";
import { useMemo, useReducer } from "react";

const initialState: ResourceState = {
    resources: [],
    allLoaded: false,
};


export const ResourceProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(resourceReducer, initialState);

    const addResource = (resource: Resource) => {
        dispatch({ type: "ADD_RESOURCE", payload: resource });
    };

    const updateResource = (name: string, updates: Partial<Resource>) => {
        dispatch({ type: "UPDATE_RESOURCE", payload: { name, updates } });
    };

    const value = useMemo(
        () => ({ state, addResource, updateResource }),
        [state]
    );

    return (
        <ResourceContext.Provider value={value}>
            {children}
        </ResourceContext.Provider>
    );
};
