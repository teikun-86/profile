"use client";

import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="p-6 mt-12 text-gray-300 text-center rounded-t-lg">
            <p className="text-lg mb-2">
                🎉 So you made it all the way down here, huh? Impressive!
                There&apos;s not much to see,
                <br />
                but hey, here&apos;s a little virtual high-five just for you! 🖐️
            </p>
            <p className="text-sm mt-2 italic">
                "Sometimes the best treasures are hidden in plain sight."
            </p>
            <p className="text-sm mt-4">
                Made with ❤️, ☕, and a bit debugging by <Link href="/" className="underline hover:text-cyan-400">Aziz Febriyanto</Link>.
            </p>
        </footer>
    );
};

export default Footer;
