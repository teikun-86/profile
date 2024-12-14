"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";
import LinkedIn from "@/components/icons/LinkedIn";
import Instagram from "@/components/icons/Instagram";
import GitHub from "@/components/icons/GitHub";
import ScrollAnimation from "react-animate-on-scroll";
import FetchImage from "@/components/app/Image";

import config from "@/config.json";

const Headline = () => {

    const scrollToAbout = () => {
        const element = document.querySelector("#about");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    }
    
    return (
        <section id="headline" className="min-h-screen grid place-items-center">
            <figure className="w-[80%] md:w-[60%] p-2 flex items-center justify-center flex-col">
                <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeOutDown"
                    animatePreScroll={true}
                >
                    <div className="p-6 mb-8 text-center">
                        <FetchImage
                            src={config.assets.profile}
                            alt="Profile Picture"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-3xl font-bold mb-2">
                            Aziz Febriyanto
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Full-Stack Web Developer & Digital Transformation
                            Specialist
                        </p>
                        <h4 className="text-lg font-medium text-center my-3">
                            Crafting seamless digital experiences from concept
                            to completion.
                        </h4>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://www.linkedin.com/in/azizfsama723/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://www.instagram.com/azizfsama/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-pink-500"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.github.com/teikun-86/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-gray-500"
                            >
                                GitHub
                            </a>
                            <a
                                href="mailto:azizfebriyanto12@gmail.com"
                                className="text-gray-300 hover:text-rose-500"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeOutUp"
                    animatePreScroll={true}
                >
                    <PrimaryButton onClick={scrollToAbout}>
                        Get to know me!
                    </PrimaryButton>
                </ScrollAnimation>
            </figure>
        </section>
    );
};

export default Headline;