import { AppState, ReducerActions } from '@/@types';
import { updateSplitContactState, updateSplitEvenlyState } from '@/lib/utils';

const reducer = (state: AppState, action: ReducerActions): AppState => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_SPLIT_CONTACT':
      const updatedSplitContactsState = updateSplitContactState(state, payload);
      return updatedSplitContactsState;

    case 'TOGGLE_SPLIT_EVENLY':
      const updatedSplitEvenlyState = updateSplitEvenlyState(state, payload);
      return updatedSplitEvenlyState;

    default:
      return state;
  }
};

export default reducer;
