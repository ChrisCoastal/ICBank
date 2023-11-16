import { AppState, ReducerActions } from '@/@types';

const reducer = (state: AppState, action: ReducerActions): AppState => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_SPLIT_CONTACT':
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

    default:
      return state;
  }
};

export default reducer;
