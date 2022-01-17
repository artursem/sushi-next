import Head from 'next/head';
import BlockChef from '../components/UI/BlockChef';
import Hero from '../components/UI/Hero';
export default function Home() {
	return (
		<main>
			<Head>
				<title>omakase</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Hero />
			<BlockChef />
			<BlockChef />
			<BlockChef />
			<BlockChef />
			<div>hero</div>
			<div>hero</div>
		</main>
	);
}
