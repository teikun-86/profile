"use client";

import Git from "@/components/icons/Git";
import GitHub from "@/components/icons/GitHub";

const VersioningControl = () => {
    return (
        <div className="flex w-full items-center justify-center flex-col bg-gray-800/10 backdrop-blur-sm p-4 min-h-72 rounded-lg my-3">
            <h4 className="text-lg font-medium mb-10">Version Control Tools</h4>
            <div className="flex flex-wrap space-x-2 justify-center">
                <Git className="size-12" />
                <GitHub className="size-12" />
            </div>
        </div>
    );
};

export default VersioningControl;
