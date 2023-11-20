import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { AppState, ContactId, UpdatePurchasePayload } from '@/@types';

// split bill
export function getUserSplit(purchaseSplit: Record<ContactId, number>) {
  return Object.values(purchaseSplit).reduce((acc, splitPercent) => {
    return acc - splitPercent;
  }, 1);
}

export function updateContactsSplit(
  contactSplit: Record<ContactId, number>,
  purchaseSplit: Record<ContactId, number>
) {
  const [[contactId, splitValue]] = Object.entries(contactSplit);
  const updatedPurchaseSplit = { ...purchaseSplit };

  if (splitValue === 0) delete updatedPurchaseSplit[contactId];
  if (splitValue !== 0) updatedPurchaseSplit[contactId] = splitValue;
  return updatedPurchaseSplit;
}

export function updateEvenContactsSplit(
  purchaseSplit: Record<ContactId, number>,
  contactId: ContactId
) {
  const splitContacts = [
    ...new Set([...Object.keys(purchaseSplit), contactId]),
  ];
  const USER_SPLIT = 1;

  const splitValue = (1 / (splitContacts.length + USER_SPLIT)).toFixed(2);
  const updatedPurchaseSplit = splitContacts.reduce((acc, contactId) => {
    return { ...acc, [contactId]: splitValue };
  }, {});

  return updatedPurchaseSplit;
}

export function getEvenSplit(purchaseSplit: Record<ContactId, number>) {
  const splitContacts = Object.keys(purchaseSplit);
  const USER_SPLIT = 1;

  const splitValue = Number(
    (1 / (splitContacts.length + USER_SPLIT)).toFixed(2)
  );
  const updatedPurchaseSplit = splitContacts.reduce((acc, contactId) => {
    return { ...acc, [contactId]: splitValue };
  }, {});

  return updatedPurchaseSplit;
}

export function getSplitSelectItems(
  splitAmounts: number[],
  contactSplitAmount?: number
) {
  return contactSplitAmount
    ? [...new Set([contactSplitAmount, ...splitAmounts])].sort((a, b) => a - b)
    : splitAmounts;
}

export function getAmountSplit(
  splitContacts: [string, number][],
  purchaseAmount: number
) {
  const splitPercentage = splitContacts.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);
  const splitAmount = +(purchaseAmount * splitPercentage).toFixed(2);

  return splitAmount;
}

// tailwind / shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// reducer
export function updatePurchaseState(
  state: AppState,
  payload: UpdatePurchasePayload
) {
  const { accountId, purchase } = payload;
  const { id: purchaseId } = purchase;
  const account = state.accounts[accountId];

  return {
    ...state,
    accounts: {
      ...state.accounts,
      [accountId]: {
        ...account,
        purchases: {
          ...account.purchases,
          [purchaseId]: purchase,
        },
      },
    },
  };
}
