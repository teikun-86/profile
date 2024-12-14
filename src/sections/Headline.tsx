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
				<ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" animatePreScroll={true}>
					<FetchImage
						src={config.assets.profile}
						alt="My Profile Pict"
						className="!w-32 !h-32 object-cover rounded-full border-2 p-0.5 border-sky-500"
					/>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" animatePreScroll={true}>
					<figcaption>
						<h1 className="text-xl font-bold text-center">
							Hi, I&apos;m Aziz Febriyanto
							<br />
							Full-Stack Developer & Digital Transformation Specialist
						</h1>
						<h2 className="text-lg font-medium text-center my-3">
							Crafting seamless digital experiences from concept to
							completion.
						</h2>
					</figcaption>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp" animatePreScroll={true}>
					<PrimaryButton onClick={scrollToAbout}>
						Get to know me!
					</PrimaryButton>
					<div className="flex items-center my-2 justify-center space-x-2">
						<Link
							rel="noreferrer"
							target="_blank"
							href="https://www.linkedin.com/in/azizfsama723/"
							title="My LinkedIn Profile"
						>
							<LinkedIn className="text-blue-500 w-5 h-5" />
						</Link>
						<Link
							rel="noreferrer"
							target="_blank"
							href="https://www.instagram.com/azizfsama/"
							title="My Instagram"
						>
							<Instagram className="w-5 h-5" />
						</Link>
						<Link
							rel="noreferrer"
							target="_blank"
							href="https://www.github.com/teikun-86/"
							title="My GitHub Profile"
						>
							<GitHub className="w-5 h-5" />
						</Link>
					</div>
				</ScrollAnimation>
			</figure>
		</section>
	);
};

export default Headline;