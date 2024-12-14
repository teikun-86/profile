import Link from "next/link";

const Blogs = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-4">
                🚧 Under Construction 🚧
            </h1>
            <p className="text-lg mb-6">
                This page is currently a work in progress. Come back soon!
            </p>
            <Link href="/" className="text-blue-400 hover:text-blue-500 underline">
                Go Back Home
            </Link>
        </div>
    );
};

export default Blogs;