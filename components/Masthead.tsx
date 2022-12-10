import React from "react";
import Image from "next/image";
import { Raleway } from "@next/font/google";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const font = Raleway({
	subsets: ["latin"],
});

const Masthead: React.FC = () => {
	return (
		<div className={font.className}>
			<div className="flex min-h-screen flex-col items-center justify-center">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute h-full w-full object-cover mix-blend-multiply"
				>
					<source src="/jellyfish-masthead.mp4" type="video/mp4" />
				</video>

				<div className="z-10 flex flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,4)]">
					<h1 className="mb-6 text-4xl xl:text-5xl">Jellies</h1>
					<h2 className="mb-2 text-2xl tracking-tight xl:text-3xl">
						<span></span>
					</h2>
				</div>
				<div className="pb-30 flex-grow-0 mix-blend-multiply transition-all duration-1000 md:pb-10">
					<KeyboardArrowDownIcon
						sx={{ width: 80, height: 80, color: "text.disabled" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Masthead;
