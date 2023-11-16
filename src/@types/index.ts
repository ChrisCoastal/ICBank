import { Dispatch } from 'react';

export type AppContext = {
  state: AppState;
  dispatch: Dispatch<ReducerActions>;
};

type ToggleSplitContactAction = {
  type: 'TOGGLE_SPLIT_CONTACT';
  payload: { contactId: ContactId; purchase: Purchase; splitPercent: number };
};

export type ReducerActions = ToggleSplitContactAction;

export type Purchase = {
  id: string;
  accountName: string;
  type: string;
  location: string;
  date: string;
  amount: number;
  description: string;
  split: Record<ContactId, number>;
};

export type Account = {
  accountId: string;
  purchases: Record<string, Purchase>;
};

export type ContactId = string;

export type Contact = {
  id: ContactId;
  name: string;
  email: string;
  phone: string;
  avatar: string;
};

export type AppState = {
  accounts: Record<string, Account>;
  contacts: Record<string, Contact>;
};
