import React from "react";
import Jellies from "./Jellies";

const About: React.FC = () => {
	return (
		<section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
			<div className="container mx-auto px-11">
				<div className="mx-auto max-w-5xl text-4xl leading-tight tracking-tight">
					<strong>Brainless Beauties</strong>
					<p>
						Jellies are one of mother nature&rsquo;s strangest wonders. They
						have no bones, brains, teeth, blood or fins — but don&rsquo;t let
						their simple anatomy fool you. These animals are spectacularly
						diverse and beautiful
					</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.montereybayaquarium.org/animals/animals-a-to-z/jellies?gclid=Cj0KCQiA1sucBhDgARIsAFoytUvA68bFczFJwhoQ5lV-x1IaXqa8t3wrBdCvl8x0oG3rG6NoK2lrIL4aAkgHEALw_wcB"
					>
						Cite
					</a>
				</div>
			</div>

			<div className="container z-0 mx-auto mt-28 px-11 text-center">
				<h2 className="text-2xl xl:text-3xl">
					There are 4 classes of Cnidarians
				</h2>
				<div className="lg:gap-15 mt-8 grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
					<Jellies
						cnidarianClassName="Anthozoa"
						classDesc="True corals, anemones, and sea pens"
						link="https://ucmp.berkeley.edu/cnidaria/anthozoa.html"
					/>
					<Jellies
						cnidarianClassName="Cubozoa"
						classDesc="Box jellies with complex eyes and potent toxins"
						link="https://ucmp.berkeley.edu/cnidaria/cubozoa.html"
					/>
					<Jellies
						cnidarianClassName="Hydrozoa"
						classDesc="Most diverse group with siphonophores, hydroids, fire corals, and many medusae"
						link="https://ucmp.berkeley.edu/cnidaria/hydrozoa.html"
					/>
					<Jellies
						cnidarianClassName="Scyphozoa"
						classDesc="The true jellyfish"
						link="https://ucmp.berkeley.edu/cnidaria/scyphozoa.html"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
