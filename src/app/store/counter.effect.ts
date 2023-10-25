import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  addFail,
  addNumber,
  addSuccess,
  getCounterValue,
} from './counter.store';
import { map, withLatestFrom } from 'rxjs';

@Injectable()
export class CounterEffects {
  addNumber$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addNumber),
      withLatestFrom(this.store.select(getCounterValue)),
      map(([action, payload]) => {
        if (payload === 10) {
          return addFail(new Error('Counter value is 10'));
        }

        return addSuccess(payload + action.value);
      })
    )
  );

  constructor(private actions$: Actions, private store: Store) {}
}
