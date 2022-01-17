import Head from 'next/head';
import Menu from '../components/sushi/Menu';
const Order = (props) => {
	return (
		<main>
			<Head>
				<title>order - omakase</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Menu menu={props.menu} />
		</main>
	);
};

export default Order;

export async function getStaticProps() {
	const res = await fetch(
		'https://sushi-e3a8a-default-rtdb.europe-west1.firebasedatabase.app/menu.json'
	);
	const data = await res.json();
	return {
		props: {
			menu: data.map((item) => {
				return {
					id: item.id,
					name: item.name,
					price: item.price,
					vege: item.vege,
				};
			}),
		},
	};
}
