import { createEffect } from '@ngrx/effects';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

// Actions
export const addNumber = createAction(
  '[Counter] Add number',
  (value: number) => ({ value })
);
export const addSuccess = createAction(
  '[Counter] Add number success',
  (value: number) => ({ value })
);
export const addFail = createAction(
  '[Counter] Add number fail',
  (error: Error) => ({ error })
);
export const reset = createAction('[Counter] Reset');

// Reducer
interface CounterState {
  counter: number;
  calculating: boolean;
  error: Error | null;
}

export const defaultState: CounterState = {
  counter: 0,
  calculating: false,
  error: null,
};

export const counterReducer = createReducer(
  defaultState,
  on(addNumber, (state) => ({ ...state, calculating: true, error: null })),
  on(addSuccess, (state, payload) => ({
    ...state,
    calculating: false,
    counter: payload.value,
    error: null,
  })),
  on(addFail, (state, payload) => ({
    ...state,
    calculating: false,
    error: payload.error,
  })),
  on(reset, () => defaultState)
);

// Selector
export const getCounterState = createFeatureSelector<CounterState>('counter');
export const getCounterCalculating = createSelector(
  getCounterState,
  (state) => state.calculating
);
export const getCounterError = createSelector(
  getCounterState,
  (state) => state.error
);
export const getCounterValue = createSelector(
  getCounterState,
  (state) => state.counter
);
