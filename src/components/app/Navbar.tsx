"use client";

import { CommandLineIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface NavigationLink {
    href: string;
    title: string;
    group: string;
    target?: string;
}

type GroupedNavigationLinks = Record<string, NavigationLink[]>;

const Links: NavigationLink[] = [
    {
        href: "/blog",
        title: "Blogs",
        group: "main",
    },
    {
        href: "/projects",
        title: "Projects",
        group: "main",
    },
    {
        href: "/contact",
        title: "Contact",
        group: "main",
    },
]

const GroupedNavigationLink: GroupedNavigationLinks = {};

Links.forEach(link => {
    if (!GroupedNavigationLink[link.group]) {
        GroupedNavigationLink[link.group] = [link];
        return;
    }
    GroupedNavigationLink[link.group].push(link);
})

const Navbar = () => {
    return (
        <header id="navbar" className="w-full  bg-slate-700/15 backdrop-blur-sm border-b border-slate-800 px-4 fixed top-0 z-[50]">
            <div className="max-w-7xl mx-auto p-2">
                <div className="flex items-center justify-between">
                    <Link href="/" className="font-medium text-lg font-mono flex items-center">
                        <CommandLineIcon className="w-6 h-6 mr-2" />
                        Aziz Febriyanto
                    </Link>
                    <div className="items-center space-x-2 justify-end hidden md:flex">
                        {
                            Links.map(link => {
                                return (
                                    <Link className="relative group px-2 py-2" key={link.href} href={link.href} target={link.target ?? '_self'}>
                                        {link.title}
                                        <span className="group-hover:w-[40%] group-focus:w-[40%] w-0 transition-[width] duration-300 ease-out absolute -bottom-2 left-2 h-1 bg-cyan-400"></span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar;