import * as constants from './constants';

export interface IncrementAction {
  type: constants.INCREMENT;
}
export interface DecrementAction {
  type: constants.DECREMENT;
}

export type countAction = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({
  type: constants.INCREMENT
});

export const decrement = (): DecrementAction => ({
  type: constants.DECREMENT
});
