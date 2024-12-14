import { ResourceProvider } from "./ResourcesProvider";

const BaseProvider = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            <ResourceProvider>
                {children}
            </ResourceProvider>
        </>
    )
};

export default BaseProvider;