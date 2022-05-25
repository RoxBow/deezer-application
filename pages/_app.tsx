import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import fetcher from '@utils/fetcher';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
}

export default MyApp;
