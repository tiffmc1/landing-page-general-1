import React from "react";
import {
	Block,
	BlockWrapper,
	BlockBackground,
	BlockContent,
} from "./StickyCascadeBlock";
import {
	SingleFactBackground,
	SingleFactContainer,
	SingleFactLeftSide,
	SingleFactRightSide,
} from "./SingleFactBlock";
import Image from "next/image";

const FactsII = () => (
	<BlockWrapper numOfPages={3}>
		<BlockBackground>
			<SingleFactBackground />
		</BlockBackground>
		<BlockContent>
			<Block
				page={0}
				renderContent={({ progress }) => (
					<SingleFactContainer>
						<SingleFactLeftSide progress={progress}>
							<div className="lg:py-15 py-5 text-3xl font-semibold md:py-10 md:text-4xl lg:text-5xl">
								Many jellies
							</div>
							<div>
								are able to produce light — an ability known as{" "}
								<em>bioluminescence</em>. They have proteins in some tissues
								that undergo a chemical reaction to produce blue or green light
								in response to stimuli
							</div>
						</SingleFactLeftSide>
						<SingleFactRightSide progress={progress}>
							<Image
								src="/assets/jellyfish-glowing.jpg"
								width={840}
								height={1620}
								alt="jelly"
							/>
						</SingleFactRightSide>
					</SingleFactContainer>
				)}
			></Block>
		</BlockContent>
		<BlockContent>
			<Block
				page={1}
				renderContent={({ progress }) => (
					<SingleFactContainer>
						<SingleFactLeftSide progress={progress}>
							<div className="lg:py-15 py-5 text-3xl font-semibold md:py-10 md:text-4xl lg:text-5xl">
								Jellies have also
							</div>
							<div>
								adapted their body color to camouflage. Most are nearly
								transparent, so they can be difficult for predators to see.
								However, some deep sea jellies are a bright red or orange color
							</div>
						</SingleFactLeftSide>
						<SingleFactRightSide progress={progress}>
							<Image
								src="/assets/jellyfish-colorful.jpg"
								width={840}
								height={1620}
								alt="jelly"
							/>
						</SingleFactRightSide>
					</SingleFactContainer>
				)}
			></Block>
		</BlockContent>
		<BlockContent>
			<Block
				page={2}
				renderContent={({ progress }) => (
					<SingleFactContainer>
						<SingleFactLeftSide progress={progress}>
							<div className="lg:py-15 py-5 text-3xl font-semibold md:py-10 md:text-4xl lg:text-5xl">
								Why red and not black?
							</div>
							<div>
								Red cannot be seen in dark water (deeper than 200 meters), so
								there&apos;s no greater protection from black than red. Also,
								colorful pigment is easier for animals to produce
							</div>
						</SingleFactLeftSide>
						<SingleFactRightSide progress={progress}>
							<Image
								src="/assets/jellyfish-red.jpg"
								width={840}
								height={1620}
								alt="jelly"
							/>
						</SingleFactRightSide>
					</SingleFactContainer>
				)}
			></Block>
		</BlockContent>
	</BlockWrapper>
);

export default FactsII;
