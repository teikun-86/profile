"use client";

import Composer from "@/components/icons/Composer";
import NPM from "@/components/icons/NPM";
import Yarn from "@/components/icons/Yarn";

const PackageManager = () => {
    return (
        <div className="flex w-full items-center justify-center flex-col bg-gray-800/10 backdrop-blur-sm p-4 min-h-72 rounded-lg my-3">
            <h4 className="text-lg font-medium mb-10">Package Managers</h4>
            <div className="flex flex-wrap space-x-2 justify-center">
                <NPM className="w-12" />
                <Composer className="size-12" />
                <Yarn className="w-12 text-blue-500" />
            </div>
        </div>
    );
};

export default PackageManager;
