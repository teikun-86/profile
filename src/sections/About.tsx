"use client";

import { useEffect, useState } from "react";
import config from "@/config.json"
import { useAsset } from "@/hooks/use-asset";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
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
                <>
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
                </>
            ),
        },
        {
            title: "Brief Experience",
            image: images.side,
            text: (
                <>
                    I thrive in collaborative environments where I can
                    contribute to meaningful projects, whether it&apos;s
                    creating ERP systems, building NFT platforms, or
                    digitalizing processes to improve efficiency. As someone
                    who&apos;s always eager to learn, I continually explore new
                    tools and frameworks to stay ahead in this ever-evolving
                    field.
                </>
            ),
        },
        {
            title: "Passion",
            image: images.aecr,
            text: (
                <>
                    Beyond coding, I take pride in problem-solving and
                    multitasking, as recognized by my &quot;Multitasking
                    Maestro&quot; achievement. When I&apos;m not working on
                    development projects, I enjoy exploring emerging tech
                    trends, spending time with cats, and diving into fantasy
                    comics and manga. Let&apos;s connect and collaborate on
                    build something amazing!
                </>
            ),
        },
    ];

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
        <section id="about" className="grid place-items-center">
            <div className="space-y-12 max-w-[90%]">
                {tabs.map((tab, index) => (
                    <ScrollAnimation
                        animateIn="fadeInDown"
                        animateOut="fadeOutUp"
                        key={index}
                    >
                        <div
                            className={`flex flex-col md:flex-row ${
                                index % 2 === 0
                                    ? "md:flex-row"
                                    : "md:flex-row-reverse"
                            } items-center gap-8`}
                        >
                            <div
                                className={`flex-shrink-0 flex ${
                                    index % 2 === 0
                                        ? "md:justify-start"
                                        : "md:justify-end"
                                } md:w-1/3`}
                            >
                                {
                                    tab.image !== '' && (
                                        <img
                                            src={tab.image}
                                            alt={tab.title}
                                            className="rounded-lg shadow-lg object-cover w-auto h-48"
                                        />
                                    )
                                }
                            </div>
                            <div className="flex-1 text-gray-300">
                                <h3
                                    className={`text-2xl font-bold mb-4 text-center ${
                                        index % 2 === 0
                                            ? "md:text-end"
                                            : "md:text-start"
                                    }`}
                                >
                                    {tab.title}
                                </h3>
                                <p
                                    className={`text-lg leading-relaxed  text-center ${
                                        index % 2 === 0
                                            ? "md:text-end"
                                            : "md:text-start"
                                    }`}
                                >
                                    {tab.text}
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </section>
    );
};

export default About;