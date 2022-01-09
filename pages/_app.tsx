import { AuthProvider } from "contexts/authContext";
import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

const client = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={client}>
        <Head>
          <title>Welcome to site!</title>
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
        <Toaster />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default CustomApp;
