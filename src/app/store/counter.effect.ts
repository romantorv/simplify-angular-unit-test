import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, delay } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import {
  addValue,
  addValueFailed,
  addValueSuccess,
  getCounterValue,
  CounterState,
} from './counter.store';

@Injectable()
export class CounterEffects {
  readonly addValue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addValue),
      withLatestFrom(this.store.select(getCounterValue)),
      delay(1000),
      map(([payload, currentValue]) => {
        if (payload.value > 9) {
          return addValueFailed({
            error: new Error('Number should be less than 10'),
          });
        }
        return addValueSuccess({ result: payload.value + currentValue });
      })
    )
  );

  constructor(private actions$: Actions, private store: Store<CounterState>) {}
}