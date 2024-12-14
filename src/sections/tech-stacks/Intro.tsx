import React from "react";

const Intro: React.FC = () => {
    return (
        <div className="p-8 bg-gray-800/10 backdrop-blur text-white rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
                🚀 Tech Stack & Tools
            </h2>
            <p className="text-lg mb-4 text-gray-300">
                I specialize in building robust, scalable, and user-friendly web
                applications. My tech arsenal includes:
            </p>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">🛠️ Frontend</h3>
                <ul className="list-disc list-inside ml-4 text-gray-300">
                    <li>
                        <span className="font-bold">Languages:</span>{" "}
                        TypeScript, JavaScript
                    </li>
                    <li>
                        <span className="font-bold">Frameworks/Libraries:</span>{" "}
                        React.js, Next.js, Tailwind CSS, Bootstrap, Alpine.js,
                        jQuery, Laravel Livewire
                    </li>
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">⚙️ Backend</h3>
                <ul className="list-disc list-inside ml-4 text-gray-300">
                    <li>
                        <span className="font-bold">Languages:</span> PHP,
                        Node.js
                    </li>
                    <li>
                        <span className="font-bold">Frameworks:</span> Laravel,
                        Express.js
                    </li>
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                    📊 Tools & Platforms
                </h3>
                <ul className="list-disc list-inside ml-4 text-gray-300">
                    <li>
                        <span className="font-bold">Version Control:</span> Git,
                        GitHub
                    </li>
                    <li>
                        <span className="font-bold">Package Managers:</span>{" "}
                        npm, Yarn, Composer
                    </li>
                    <li>
                        <span className="font-bold">Other Tools:</span> VS Code
                    </li>
                </ul>
            </div>

            <div className="text-center text-gray-300">
                <p className="text-xl">
                    ✨ <span className="font-bold">Styling Preference:</span>{" "}
                    Dark mode all the way 🌙
                </p>
                <p className="text-sm">PS: My code editor is dark mode too :D</p>
            </div>
        </div>
    );
};

export default Intro;
