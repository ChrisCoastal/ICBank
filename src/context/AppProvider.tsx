'use client';

import React, { FC, useReducer, createContext } from 'react';
import reducer from './reducer';
import { AppContext } from '@/@types';

import { INITIAL_STATE } from '@/lib/test-data';

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
