import React from "react";

export const SingleFactContainer: React.FC = ({ children }) => (
	<div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
		{children}
	</div>
);

export const SingleFactBackground: React.FC = () => (
	<div className="sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
		<div className="h-[30vh] bg-black text-white lg:h-auto lg:bg-white"></div>
		<div className="h-[70vh] bg-white lg:min-h-screen lg:bg-black"></div>
	</div>
);

export const SingleFactLeftSide: React.FC<{ progress: number }> = ({
	children,
	progress,
}) => {
	let translateY = Math.max(0, 50 - progress * 3 * 50);

	if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);

	return (
		<div
			className="flex h-[30vh] flex-col items-center justify-center px-10 text-xl text-white lg:h-auto lg:text-3xl lg:text-black"
			style={{ transform: `translateY(${translateY}px)` }}
		>
			<div className="leading-6 lg:leading-10">{children}</div>
		</div>
	);
};

export const SingleFactRightSide: React.FC<{ progress: number }> = ({
	children,
	progress,
}) => {
	let translateY = Math.max(-50, -(progress - 0.5) * 50);
	return (
		<div
			className="flex h-screen flex-1 justify-center lg:items-center"
			style={{ transform: `translateY(${translateY}px)` }}
		>
			<div className="w-full max-w-md px-10 pt-10 md:px-0 lg:pt-0">
				{children}
			</div>
		</div>
	);
};
