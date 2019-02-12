import { DECREMENT, INCREMENT } from './constants';
import { countAction } from './actions';
import { CountState } from './types';

const initialState: CountState = {
  count: 0
};

export const countReducer = (
  state: CountState = initialState,
  action: countAction
): CountState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
