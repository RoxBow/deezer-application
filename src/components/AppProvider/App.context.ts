import * as React from 'react';

export type Context = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const AppContext: React.Context<Context> = React.createContext<Context>({
  isLoading: false,
  setIsLoading: () => {},
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
