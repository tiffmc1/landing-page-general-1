import React from "react";
import Image from "next/image";

interface Props {
	cnidarianClassName: string;
	classDesc: string;
	link: string;
}

const Jellies: React.FC<Props> = ({ cnidarianClassName, classDesc, link }) => {
	return (
		<div className="flex flex-col justify-between rounded-lg border p-2">
			<a
				href={link}
				rel="noopener noreferrer"
				target="_blank"
				className="text-xl xl:text-2xl"
			>
				{cnidarianClassName}
			</a>
			<div className="text-lg">{classDesc}</div>
			<Image
				src="/assets/jelly-placement-holder.jpg"
				alt="Jellyfish"
				width={240}
				height={559}
				className="mx-auto rounded-lg"
			/>
		</div>
	);
};

export default Jellies;
