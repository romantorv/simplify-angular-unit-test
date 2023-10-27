import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addValue,
  getCounterCalculating,
  getCounterError,
  getCounterValue,
  resetValue,
} from '../store/counter.store';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'ng-counter',
  template: `
    <p>
      <button
        type="button"
        [disabled]="loading$ | async"
        (click)="onPressSuccess()"
      >
        Adding 1
      </button>
      <button
        type="button"
        [disabled]="loading$ | async"
        (click)="onPressFailed()"
      >
        Adding 10
      </button>
      <button
        type="button"
        [disabled]="loading$ | async"
        (click)="onPressReset()"
      >
        Reset
      </button>
    </p>
    <h2>Total: {{ totalValue$ | async }}</h2>
    <span style="color: red" *ngIf="errorMessage$ | async as message">{{
      message
    }}</span>
  `,
})
export class CounterComponent {
  totalValue$ = this.store.select(getCounterValue);
  errorMessage$ = this.store
    .select(getCounterError)
    .pipe(map((error) => error?.message ?? null));
  loading$ = this.store.select(getCounterCalculating).pipe(startWith(false));

  constructor(private store: Store) {}

  onPressSuccess(): void {
    this.store.dispatch(addValue({ value: 1 }));
  }

  onPressFailed(): void {
    this.store.dispatch(addValue({ value: 10 }));
  }

  onPressReset(): void {
    this.store.dispatch(resetValue());
  }
}
