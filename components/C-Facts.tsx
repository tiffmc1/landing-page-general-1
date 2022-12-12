import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import s from "../styles/facts.module.css";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
	const progress = sectionProgress - blockNo;

	if (0 <= progress && progress < 1) return 1;
	else return 0.2;
};

const Facts: React.FC = () => {
	const { scrollY } = useContext(ScrollContext);
	const refContainer = useRef<HTMLDivElement>(null);

	const { current: elContainer } = refContainer;
	const numOfPages = 3;
	let progress = 0;

	if (elContainer) {
		const { clientHeight, offsetTop } = elContainer;
		const screenH = window.innerHeight;
		const halfH = screenH / 2;
		const percentY =
			Math.min(
				clientHeight + halfH,
				Math.max(-screenH, scrollY - offsetTop) + halfH
			) / clientHeight;

		progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
	}

	return (
		<div ref={refContainer} className="bg-black text-white">
			<div className="py-30 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 text-2xl font-semibold tracking-tight md:py-28 md:text-3xl lg:px-20 lg:py-36 lg:text-4xl">
				<div className="leading-[1.15]">
					<div
						className={`${s.factsText} lg:py-15 py-5 text-4xl md:py-10 md:text-5xl lg:text-6xl`}
						style={{ opacity: opacityForBlock(progress, 0) }}
					>
						Did you know?
					</div>

					<span
						className={`${s.factsText} mb-2 inline-block after:content-['_']`}
						style={{ opacity: opacityForBlock(progress, 1) }}
					>
						Jellies are older than the dinosaurs. Scientists have fossilized
						evidence that suggests jellies have been around for 600 millions
						years or more, making them one of the oldest multicellular life
						forms on our planet
					</span>

					<span
						className={`${s.factsText} inline-block`}
						style={{ opacity: opacityForBlock(progress, 2) }}
					>
						One of the most toxic jellies is also one of the tiniest. The
						body&apos;s reaction to the toxic venom of the Irukandji, which is
						found off the coast of Australia and has bells less than one inch
						wide, is so overpowering that it has its own name:{" "}
						<em>Irukandji Syndrome</em>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Facts;
