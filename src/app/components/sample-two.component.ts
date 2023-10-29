import { Component, Input, inject } from '@angular/core';
import { UrlService } from '../services/url.service';

interface NameObject {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'sample-two',
  template: `
    <h1>Case #2: Having services with http fetching</h1>
    <div>
      <p>Fetching from host: {{ urlService.apiRoot }}</p>
      <button (click)="urlService.fetchContents()">Start fetching</button>
      <ul>
        <li *ngFor="let article of urlService.articles">{{ article.title }}</li>
      </ul>
    </div>
  `,
})
export class SampleTwoComponent {
  @Input() name: string;

  readonly urlService = inject(UrlService);

  get fetchURL(): string {
    return this.urlService.apiRoot;
  }
}
