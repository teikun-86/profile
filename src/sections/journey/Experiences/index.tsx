"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";

interface Experience {
    title?: string;
    company?: string;
    date?: string;
    description?: string;
    containMultipleExperience?: boolean;
    toCombine?: Experience[];
}

const experiences: Experience[] = [
    {
        title: "Full Stack Developer",
        company: "CV. Untuk Semua Sahabat",
        date: "June 2021 - February 2022",
        description:
            "Built an ERP web app from scratch. Designed use cases, ERD, and developed as the sole developer.",
    },
    {
        title: "Co-Founder & Full Stack Developer",
        company: "TwinSlipper.org",
        date: "October 2021 - December 2022",
        description:
            "Led the creation of NFT projects, from ideation to web development, mockups, utilities, and documentation.",
    },
    {
        title: "Frontend Developer",
        company: "PT. Sintegra Inovasi Teknologi",
        date: "December 2022 - March 2023",
        description:
            "Developed a travel ticket website for flights, trains, and other services.",
    },
    {
        title: "Backend Developer",
        company: "PT. Stafbook Teknologi Asia",
        date: "July 2024 - October 2024",
        description:
            "Digitized forms and automated certificate creation for clients.",
    },
    {
        title: "Fullstack Developer",
        company: "PT. Stafbook Teknologi Asia",
        date: "October 2024 - Present",
        description:
            "Continued digitalization of forms and certificates for clients.",
    },
];

const Timeline: React.FC = () => {
    const expRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (expRef.current && lineRef.current) {
            const exp = expRef.current;
            const line = lineRef.current;
            line.style.height = exp.clientHeight - 70 + "px";
        }
    }, []);

    const scrollToTechStacks = () => {
        const element = document.querySelector("#tech-stacks");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="journeys" className="min-h-screen">
            <div className="max-w-4xl mx-auto p-6">
                <ScrollAnimation
                    animateIn="fadeInDown"
                    animateOut="fadeOutDown"
                >
                    <h2 className="text-3xl font-bold text-center mb-8">
                        My Journey
                    </h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
                    <div className="flex flex-col space-y-10">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/10 rounded-lg text-center md:text-left w-full cursor-pointer hover:bg-gray-800/20 transition-all duration-100 backdrop-blur"
                            >
                                {exp.containMultipleExperience &&
                                exp.toCombine &&
                                exp.toCombine.length > 0 ? (
                                    <div className="w-full h-full rounded-md p-4">
                                        <h3 className="text-xl font-semibold text-sky-500">
                                            {exp.company}
                                        </h3>
                                        <div className="flex space-x-4 flex-col">
                                            <div className="flex flex-col space-y-3 divide-y divide-gray-300 relative">
                                                <div className="block">
                                                    <p className="text-sm text-gray-300">
                                                        {exp.title}
                                                    </p>
                                                    <p className="text-sm text-gray-400 italic mb-3">
                                                        {exp.date}
                                                    </p>
                                                    <p className="text-gray-200">
                                                        {exp.description}
                                                    </p>
                                                </div>
                                                {exp.toCombine.map((ext, i) => (
                                                    <div
                                                        className="block"
                                                        key={i}
                                                    >
                                                        <p className="text-sm text-gray-300">
                                                            {ext.title}
                                                        </p>
                                                        <p className="text-sm text-gray-400 italic mb-3">
                                                            {ext.date}
                                                        </p>
                                                        <p className="text-gray-200">
                                                            {ext.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full rounded-md p-4">
                                        <h3 className="text-xl font-semibold text-sky-500">
                                            {exp.title}
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-gray-400 italic mb-3">
                                            {exp.date}
                                        </p>
                                        <p className="text-gray-200">
                                            {exp.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOut="fadeOutRight"
                >
                    <div className="flex items-center justify-center mt-4">
                        <PrimaryButton onClick={scrollToTechStacks}>
                            See My Tech Stacks
                        </PrimaryButton>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default Timeline;
