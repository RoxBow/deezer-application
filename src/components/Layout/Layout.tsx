import type { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import Player, { AudioPlay } from '@components/Player/Player';
import fetcher from '@utils/fetcher';
import { AppContext } from '@components/AppProvider/App.context';
import Header from '@components/Header/Header';

type LayoutProps = {
  children: ReactNode;
};
const Layout: FC<LayoutProps> = ({ children }) => {
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
    <Box>
      <Head>
        <title>Deezer application</title>
        <link
          rel="icon"
          href="https://e-cdn-files.dzcdn.net/cache/images/common/favicon/favicon.a6a53d55264841165a904dbea19d5d73.ico"
        />
      </Head>

      <SWRConfig value={{ fetcher }}>
        <ChakraProvider>
          <AppContext.Provider value={contextValue}>
            <Header />

            {children}

            <Player />
          </AppContext.Provider>
        </ChakraProvider>
      </SWRConfig>
    </Box>
  );
};

export default Layout;
