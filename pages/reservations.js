import Head from 'next/head';
import BlockChef from '../components/UI/BlockChef';
import Card from '../components/UI/Card';

const Reservations = () => {
	return (
		<main>
			<Head>
				<title>reservations - omakase</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<BlockChef />
			<BlockChef />
			<BlockChef />
			<BlockChef />
			<Card>hero</Card>
			<Card>hero</Card>
		</main>
	);
};

export default Reservations;
