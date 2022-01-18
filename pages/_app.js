import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../components/UI/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
