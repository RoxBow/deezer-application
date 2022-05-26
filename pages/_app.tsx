import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContext } from '@components/AppProvider/App.context';
import { SWRConfig } from 'swr';
import fetcher from '@utils/fetcher';
import { useMemo, useState } from 'react';
import type { AudioPlay } from '@components/Player/Player';
import Head from 'next/head';
import Player from '@components/Player/Player';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [audioPlay, setAudioPlay] = useState<AudioPlay | null>(null);

  const contextValue = useMemo(
    () => ({
      setIsLoading,
      isLoading,
      audioPlay,
      setAudioPlay,
    }),
    [audioPlay, isLoading]
  );

  return (
    <SWRConfig value={{ fetcher }}>
      <ChakraProvider>
        <AppContext.Provider value={contextValue}>
          <Head>
            <title>Deezer application</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Component {...pageProps} />

          <Player />
        </AppContext.Provider>
      </ChakraProvider>
    </SWRConfig>
  );
}

export default MyApp;
