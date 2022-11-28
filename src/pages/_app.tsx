import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from 'components/Layout';

import 'styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
