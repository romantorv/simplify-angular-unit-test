import { Injectable, inject } from '@angular/core';
import { Env } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private env = inject(Env);

  get apiRoot(): string {
    if (this.env === 'production') {
      return 'http://kreativefactory/api';
    }

    if (this.env === 'staging') {
      return 'https://staging.example.com/api';
    }

    return 'http://localhost:3000/api';
  }
}
