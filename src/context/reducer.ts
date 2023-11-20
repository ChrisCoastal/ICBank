import { AppState, ReducerActions } from '@/@types';
import { updatePurchaseState } from '@/lib/utils';

const reducer = (state: AppState, action: ReducerActions): AppState => {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_PURCHASE': {
      const updatedPurchaseState = updatePurchaseState(state, payload);
      return updatedPurchaseState;
    }

    default:
      return state;
  }
};

export default reducer;
