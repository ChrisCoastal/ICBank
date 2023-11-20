import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type {
  AppState,
  ContactId,
  SplitContactPayload,
  SplitEvenlyPayload,
} from '@/@types';

// split bill
export function getUserSplit(purchaseSplit: Record<ContactId, number>) {
  return Object.values(purchaseSplit).reduce((acc, splitPercent) => {
    return acc - splitPercent;
  }, 1);
}

export function getSplitSelectItems(
  splitAmounts: number[],
  contactSplitAmount?: number
) {
  return contactSplitAmount
    ? [contactSplitAmount, ...splitAmounts].sort((a, b) => a - b)
    : splitAmounts;
}

// tailwind / shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// reducer
export function updateSplitContactState(
  state: AppState,
  payload: SplitContactPayload
) {
  const { contactId, purchase, splitPercent } = payload;
  const { id: purchaseId, split } = purchase;
  const account = state.accounts[purchase.accountName];
  const newSplit = { ...split };
  if (split[contactId] === splitPercent || splitPercent === 0) {
    delete newSplit[contactId];
  } else {
    newSplit[contactId] = splitPercent;
  }

  return {
    ...state,
    accounts: {
      ...state.accounts,
      [purchase.accountName]: {
        ...account,
        purchases: {
          ...account.purchases,
          [purchaseId]: {
            ...account.purchases[purchaseId],
            split: newSplit,
          },
        },
      },
    },
  };
}

export function updateSplitEvenlyState(
  state: AppState,
  payload: SplitEvenlyPayload
) {
  const { purchase, splitEven } = payload;
  const { id: purchaseId } = purchase;
  const account = state.accounts[purchase.accountName];

  return {
    ...state,
    accounts: {
      ...state.accounts,
      [purchase.accountName]: {
        ...account,
        purchases: {
          ...account.purchases,
          [purchaseId]: {
            ...account.purchases[purchaseId],
            splitEven,
          },
        },
      },
    },
  };
}
