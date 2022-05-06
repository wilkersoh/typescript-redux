import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "services/graphql";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
