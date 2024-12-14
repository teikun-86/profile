"use client";

import ExpressJS from "@/components/icons/ExpressJS";
import LaravelIcon from "@/components/icons/Laravel";
import NodeJS from "@/components/icons/NodeJS";
import PhpIcon from "@/components/icons/Php";

const BackEnd = () => {
    return (
        <div className="flex items-center w-full justify-center flex-col bg-gray-800/10 backdrop-blur-sm p-4 min-h-72 rounded-lg my-3">
            <h4 className="text-lg font-medium mb-10">Back End Development</h4>
            <div className="flex flex-wrap space-x-2 justify-center">
                <PhpIcon className="w-12 h-12 text-blue-400" />
                <NodeJS className="size-12" />
                <LaravelIcon className="w-12 h-12" />
                <ExpressJS className="size-12" />
            </div>
        </div>
    );
};

export default BackEnd;
