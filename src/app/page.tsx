import LoadWhenAllResourcesLoaded from "@/components/app/LoadWhenAllResourcesLoaded";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Headline from "@/sections/Headline";
import Experiences from "@/sections/journey/Experiences";
import TechStacks from "@/sections/tech-stacks";

export default function Home() {
	return (
		<div id="contents" className="max-w-7xl mx-auto">
			<LoadWhenAllResourcesLoaded>
				<Headline />
				<About />
				<Experiences />
				<TechStacks />
				<Footer />
			</LoadWhenAllResourcesLoaded>
		</div>
	);
}
