import Head from "next/head";
import Image from "next/image";
import { Raleway } from "@next/font/google";

import Masthead from "../components/Masthead";
import About from "../components/About";

const font = Raleway({
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className={font.className}>
			<Head>
				<title>Jellies</title>
				<meta
					name="description"
					content="General landing page with jellies as the topic"
				/>
			</Head>

			<main>
				<Masthead />
				<About />
			</main>

			<footer>
				Powered by <span></span>
			</footer>
		</div>
	);
}
