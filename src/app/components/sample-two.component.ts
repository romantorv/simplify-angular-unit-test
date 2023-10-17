import { Component, Input, inject } from '@angular/core';
import { UrlService } from '../services/url.service';

interface NameObject {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'sample-two',
  template: `
    <h1>Case #2: Having services with pipes</h1>
    <div>
      <p>Hello {{ name | convertToSnake }}</p>
      <p>Fetching from host: {{ fetchURL }}</p>
    </div>
  `,
})
export class SampleTwoComponent {
  @Input() name: string;

  private urlService = inject(UrlService);

  get fetchURL(): string {
    return this.urlService.apiRoot;
  }
}
