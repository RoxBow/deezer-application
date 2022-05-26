import * as React from 'react';
import type { AudioPlay } from '@components/Player/Player';

export type Context = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  audioPlay: AudioPlay | null;
  setAudioPlay: (audioPlay: AudioPlay) => void;
};

export const AppContext: React.Context<Context> = React.createContext<Context>({
  isLoading: false,
  setIsLoading: () => {},
  audioPlay: null,
  setAudioPlay: () => {},
});

export const useApp = (): Context => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(
      `You can't use the useAppContext outside a AppContext component.`
    );
  }
  return context;
};
