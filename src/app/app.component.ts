import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<sample-one [fullName]="'Vinh Bach'"></sample-one>`,
})
export class AppComponent {
  title = 'simplify-unit-test';
}
