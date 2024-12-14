"use client";

import useTimer from "@/hooks/use-timer";
import { useEffect, useState } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import config from "@/config.json"
import { useAsset } from "@/hooks/use-asset";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
    const [tabPosition, setTabPosition] = useState<number>(0);

    const { loadAsset } = useAsset();
    
    const [images, setImages] = useState({
        profile: "",
        aecr: "",
        side: "",
    })
    const tabs = [
        {
            title: "Introduction",
            image: images.profile,
            text: (
                <p className="text-center md:text-right">
                    A passionate and dedicated Full{" "}
                    <span className="line-through opacity-50 italic">
                        stuck
                    </span>{" "}
                    Stack Web Developer with over{" "}
                    {new Date().getFullYear() - 2021} years of experience
                    building scalable, user-friendly, and innovative web
                    applications. My expertise spans a wide range of
                    technologies, including <b>PHP</b>, <b>JavaScript</b>,{" "}
                    <b>TypeScript</b>, and frameworks like <b>Laravel</b>,{" "}
                    <b>React.js</b>, <b>Next.js</b>, and <b>Node.js</b>.
                </p>
            ),
        },
        {
            title: "Brief Experience",
            image: images.side,
            text: (
                <p className="text-center md:text-right">
                    I thrive in collaborative environments where I can
                    contribute to meaningful projects, whether it&apos;s
                    creating ERP systems, building NFT platforms, or
                    digitalizing processes to improve efficiency. As someone
                    who&apos;s always eager to learn, I continually explore new
                    tools and frameworks to stay ahead in this ever-evolving
                    field.
                </p>
            ),
        },
        {
            title: "Passion",
            image: images.aecr,
            text: (
                <p className="text-center md:text-start">
                    Beyond coding, I take pride in problem-solving and
                    multitasking, as recognized by my &quot;Multitasking
                    Maestro&quot; achievement. When I&apos;m not working on
                    development projects, I enjoy exploring emerging tech
                    trends, spending time with cats, and diving into fantasy
                    comics and manga. Let&apos;s connect and collaborate on
                    build something amazing!
                </p>
            ),
        },
    ];

    const navigateTab = (tab: number) => {
        setTabPosition(tab);
        reset();
    }

    const nextTab = () => {
        navigateTab(tabPosition === 2 ? 0 : tabPosition + 1);
    }
    
    const { progress, pause, resume, reset } = useTimer({
        duration: 15000,
        step: 10    ,
        onEnd: nextTab,
    });
    
    const scrollToJourney = () => {
        const element = document.querySelector("#journeys");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        loadAsset(config.assets.profile, "image", (result: string) => {
            setImages(prev => {
                prev.profile = result;
                return prev;
            });
        })
        loadAsset(config.assets.side, "image", (result: string) => {
            setImages(prev => {
                prev.side = result;
                return prev;
            });
        })
        loadAsset(config.assets.aecr, "image", (result: string) => {
            setImages(prev => {
                prev.aecr = result;
                return prev;
            });
        })
    }, [])
    
    return (
        <section id="about" className="min-h-screen grid place-items-center">
            <div className="flex flex-col items-center justify-center">
                <ScrollAnimation animateIn="fadeInDown" animateOut="fadeOutUp">
                    <h1 className="text-gray-100 text-xl font-semibold text-center mb-5">About me</h1>
                    <div
                        className="block max-w-[90%] mx-auto w-full bg-white/[.05] backdrop-blur-md p-3 rounded space-y-2 shadow-lg shadow-cyan-300"
                        onMouseEnter={pause}
                        onMouseLeave={resume}
                    >
                        <div className="w-full p-2 rounded-md flex items-center justify-between space-x-2">
                            <button
                                onClick={() => navigateTab(0)}
                                className={`w-1/3 rounded-md p-2 text-center text-white ${
                                    tabPosition === 0
                                        ? "bg-white/10 hover:bg-white/20"
                                        : " hover:bg-white/10"
                                }`}
                            >
                                Introduction
                            </button>
                            <button
                                onClick={() => navigateTab(1)}
                                className={`w-1/3 rounded-md p-2 text-center text-white ${
                                    tabPosition === 1
                                        ? "bg-white/10 hover:bg-white/20"
                                        : " hover:bg-white/10"
                                }`}
                            >
                                Experience
                            </button>
                            <button
                                onClick={() => navigateTab(2)}
                                className={`w-1/3 rounded-md p-2 text-center text-white ${
                                    tabPosition === 2
                                        ? "bg-white/10 hover:bg-white/20"
                                        : " hover:bg-white/10"
                                }`}
                            >
                                Passion
                            </button>
                        </div>
                        <div className="w-full h-1 rounded-md overflow-hidden ">
                            <div
                                className="bg-white h-0.5"
                                style={{ width: `${100 - progress}%` }}
                            ></div>
                        </div>
                        <div className="relative rounded-b-md overflow-hidden transition-all">
                            <div className="block">
                                <div className={`flex flex-col ${tabPosition === 0 ? 'items-center' : tabPosition === 1 ? 'md:flex-row items-center md:items-start' : 'md:flex-row-reverse items-center md:items-start'}  justify-center`}>
                                    {tabs[tabPosition].image !== "" && (
                                        <Image
                                            alt="Profile"
                                            src={tabs[tabPosition].image}
                                            width={384}
                                            height={384}
                                            className="md:w-52 md:h-52 w-full mb-4 rounded-md drop-shadow-md transition-all duration-[400ms]"
                                        />
                                    )}
                                    {tabs[tabPosition].text}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
                    <PrimaryButton onClick={scrollToJourney} className="mt-5">
                        See my Journeys <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </PrimaryButton>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default About;