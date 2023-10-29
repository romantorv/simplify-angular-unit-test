import { Component } from '@angular/core';
import { CounterService } from '../store/counter.service';

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
  totalValue$ = this.counterService.counterValue$;
  errorMessage$ = this.counterService.counterErrorMessage$;
  loading$ = this.counterService.counterLoading$;

  constructor(private counterService: CounterService) {}

  onPressSuccess(): void {
    this.counterService.addValue(1);
  }

  onPressFailed(): void {
    this.counterService.addValue(10);
  }

  onPressReset(): void {
    this.counterService.resetValue();
  }
}
