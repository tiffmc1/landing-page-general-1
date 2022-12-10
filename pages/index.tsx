import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Masthead from "../components/Masthead";
import About from "../components/About";

export default function Home() {
	return (
		<div className={styles.container}>
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

			<footer className={styles.footer}>
				Powered by <span className={styles.logo}></span>
			</footer>
		</div>
	);
}
