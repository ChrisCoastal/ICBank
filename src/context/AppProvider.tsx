'use client';

import React, { createContext,FC, useReducer } from 'react';

import { AppContext } from '@/@types';
import { INITIAL_STATE } from '@/lib/test-data';

import reducer from './reducer';

type AppContextProps = {
  children: React.ReactNode;
};

const AppContext = createContext({} as AppContext);

const AppProvider: FC<AppContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
