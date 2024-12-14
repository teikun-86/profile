// ResourceContext.tsx
import { createContext, useContext } from "react";

// Define the Resource interface
export interface Resource {
    name?: string;
    isLoaded: boolean;
    initializedAt?: Date;
    loadedAt?: Date;
    type?: string;
}

// Define actions for the reducer
type Action =
    | { type: "ADD_RESOURCE"; payload: Resource }
    | {
          type: "UPDATE_RESOURCE";
          payload: { name: string; updates: Partial<Resource> };
      };

// Define the state type
export interface ResourceState {
    resources: Resource[];
    allLoaded: boolean;
}

// Initial state

// Reducer function
export const resourceReducer = (
    state: ResourceState,
    action: Action
): ResourceState => {
    switch (action.type) {
        case "ADD_RESOURCE": {
            const updatedResources = [...state.resources, action.payload];
            const allLoaded = updatedResources.every(
                (resource) => resource.isLoaded
            );
            return {
                ...state,
                resources: updatedResources,
                allLoaded,
            };
        }
        case "UPDATE_RESOURCE": {
            const updatedResources = state.resources.map((resource) =>
                resource.name === action.payload.name
                    ? { ...resource, ...action.payload.updates }
                    : resource
            );
            const allLoaded = updatedResources.every(
                (resource) => resource.isLoaded
            );
            return {
                ...state,
                resources: updatedResources,
                allLoaded,
            };
        }
        default:
            return state;
    }
};

// Create the context
export const ResourceContext = createContext<{
    state: ResourceState;
    addResource: (resource: Resource) => void;
    updateResource: (name: string, updates: Partial<Resource>) => void;
} | null>(null);


// Custom hook
export const useResource = () => {
    const context = useContext(ResourceContext);
    if (!context) {
        throw new Error("useResource must be used within a ResourceProvider");
    }
    return context;
};
