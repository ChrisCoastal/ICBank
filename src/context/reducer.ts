import { AppState, ReducerActions } from '@/@types';

const reducer = (state: AppState, action: ReducerActions): AppState => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_SPLIT_CONTACT':
      const index = state.selectedSplitContacts.indexOf(payload);

      if (index > -1) {
        return {
          ...state,
          selectedSplitContacts: [
            ...state.selectedSplitContacts.slice(0, index),
            ...state.selectedSplitContacts.slice(index + 1),
          ],
        };
      }
      if (index === -1) {
        return {
          ...state,
          selectedSplitContacts: [...state.selectedSplitContacts, payload],
        };
      }

    default:
      return state;
  }
};

export default reducer;
