import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addValue,
  getCounterCalculating,
  getCounterError,
  getCounterValue,
  resetValue,
} from './counter.store';
import { map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private store: Store) {}

  addValue(value: number) {
    return this.store.dispatch(addValue({ value }));
  }

  resetValue() {
    return this.store.dispatch(resetValue());
  }

  counterValue$ = this.store.select(getCounterValue);
  counterErrorMessage$ = this.store
    .select(getCounterError)
    .pipe(map((error) => error?.message ?? null));
  counterLoading$ = this.store
    .select(getCounterCalculating)
    .pipe(startWith(false));
}
