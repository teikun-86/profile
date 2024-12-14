import LoadWhenAllResourcesLoaded from "@/components/app/LoadWhenAllResourcesLoaded";
import About from "@/sections/About";
import Headline from "@/sections/Headline";
import Experiences from "@/sections/journey/Experiences";

export default function Home() {
	return (
		<div id="contents" className="max-w-7xl mx-auto">
			<LoadWhenAllResourcesLoaded>
				<Headline />
				<About />
				<Experiences />
			</LoadWhenAllResourcesLoaded>
		</div>
	);
}
