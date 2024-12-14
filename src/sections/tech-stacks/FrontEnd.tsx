import AlpineJS from "@/components/icons/AlpineJS";
import Bootstrap from "@/components/icons/Bootstrap";
import CSS from "@/components/icons/CSS";
import HTML from "@/components/icons/HTML";
import JavascriptIcon from "@/components/icons/Javascript";
import NextJSIcon from "@/components/icons/NextJS";
import ReactIcon from "@/components/icons/React";
import TailwindCSS from "@/components/icons/TailwindCSS";

const FrontEnd = () => {
    return (
        <div className="flex w-full items-center justify-center flex-col bg-gray-800/10 backdrop-blur-sm shadow-md p-4 min-h-72 rounded-lg my-3">
            <h4 className="text-lg font-medium mb-10">Front End Development</h4>
            <div className="flex flex-wrap space-x-2 justify-center">
                <HTML className="w-12 h-12 text-orange-500" />
                <CSS className="w-12 h-12 text-blue-500" />
                <JavascriptIcon className="text-yellow-500 w-12 h-12" />
                <ReactIcon className="w-12 h-12 text-blue-500" />
                <NextJSIcon className="w-12 h-12" />
                <AlpineJS className="w-12 h-12" />
                <TailwindCSS className="w-12 h-12" />
                <Bootstrap className="w-12 h-12 text-indigo-600" />
            </div>
        </div>
    );
};

export default FrontEnd;
