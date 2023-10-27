import {
  createAction,
  props,
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export interface CounterState {
  value: number;
  calculating: boolean;
  error: Error | null;
}

const initialState: CounterState = {
  value: 0,
  calculating: false,
  error: null,
};

// Actions
export const addValue = createAction(
  '[COUNTER] Add a number',
  props<{ value: number }>()
);
export const addValueSuccess = createAction(
  '[COUNTER] Add number success',
  props<{ result: number }>()
);
export const addValueFailed = createAction(
  '[COUNTER] Failed to add number',
  props<{ error: Error }>()
);
export const resetValue = createAction('[COUNTER] Reset number');

// Reducer
export const counterReducer = createReducer(
  initialState,
  on(addValue, (state) => {
    return {
      ...state,
      calculating: true,
      error: null,
    };
  }),
  on(addValueSuccess, (state, action) => {
    return {
      ...state,
      calculating: false,
      error: null,
      value: action.result,
    };
  }),
  on(addValueFailed, (state, action) => ({
    ...state,
    error: action.error,
    calculating: false,
  })),
  on(resetValue, () => initialState)
);

// Selectors
const counterState = createFeatureSelector<CounterState>('counter');
export const getCounterValue = createSelector(
  counterState,
  (state) => state.value
);
export const getCounterCalculating = createSelector(
  counterState,
  (state) => state.calculating
);
export const getCounterError = createSelector(
  counterState,
  (state) => state.error
);
