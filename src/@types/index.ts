import { Dispatch } from 'react';

export type AppContext = {
  state: AppState;
  dispatch: Dispatch<ReducerActions>;
};

type ToggleSplitContactAction = {
  type: 'TOGGLE_SPLIT_CONTACT';
  payload: string;
};

export type ReducerActions = ToggleSplitContactAction;

export type Purchase = {
  type: string;
  location: string;
  date: string;
  amount: number;
  description: string;
};

export type Account = {
  name: string;
  purchases: Purchase[];
};

export type Contact = {
  name: string;
  email: string;
  phone: string;
  avatar: string;
};

export type AppState = {
  accounts: Account[];
  contacts: Contact[];
  selectedSplitContacts: string[];
};
