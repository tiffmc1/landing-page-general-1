import Head from "next/head";
import Image from "next/image";
import { Raleway } from "@next/font/google";

import Masthead from "../components/A-Masthead";
import About from "../components/B-About";
import Facts from "../components/C-Facts";
import FactsII from "../components/D-FactsII";

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
				<Facts />
				<FactsII />
			</main>

			<footer>
				Powered by <span></span>
			</footer>
		</div>
	);
}
