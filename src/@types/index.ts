import { Dispatch } from 'react';

export type AppContext = {
  state: AppState;
  dispatch: Dispatch<ReducerActions>;
};

export type SplitContactPayload = {
  contactId: ContactId;
  purchase: Purchase;
  splitPercent: number;
};

type ToggleSplitContactAction = {
  type: 'TOGGLE_SPLIT_CONTACT';
  payload: SplitContactPayload;
};

export type SplitEvenlyPayload = { purchase: Purchase; splitEven: boolean };

type ToggleSplitEvenlyAction = {
  type: 'TOGGLE_SPLIT_EVENLY';
  payload: SplitEvenlyPayload;
};

export type UpdatePurchasePayload = {
  accountId: string;
  purchase: Purchase;
};

type UpdatePurchaseAction = {
  type: 'UPDATE_PURCHASE';
  payload: UpdatePurchasePayload;
};

export type ReducerActions =
  | ToggleSplitContactAction
  | ToggleSplitEvenlyAction
  | UpdatePurchaseAction;

export type Purchase = {
  id: string;
  accountId: string;
  type: string;
  location: string;
  date: string;
  amount: number;
  description: string;
  split: Record<ContactId, number>;
  splitEven: boolean;
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
  split?: Record<string, number>;
};

export type AppState = {
  accounts: Record<string, Account>;
  contacts: Record<string, Contact>;
};
