import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Env } from '../tokens';
import { map } from 'rxjs';

interface ArticleResponse {
  id: number;
  title: string;
  createdAt: string;
  createdBy: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private env = inject(Env);
  articles: { id: number; title: string; createdAt: string }[] = [];

  constructor(private httpClient: HttpClient) {}

  get apiRoot(): string {
    if (this.env === 'production') {
      return 'https://653e3318f52310ee6a9aad19.mockapi.io/articles';
    }

    if (this.env === 'staging') {
      return 'https://staging.example.com/articles';
    }

    return 'http://kreativefactory/articles';
  }

  fetchContents(): void {
    this.httpClient
      .get<ArticleResponse[]>(this.apiRoot)
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((data) => {
        data.map((article) => {
          this.articles.push({
            id: article.id,
            title: article.title,
            createdAt: article.createdAt,
          });
        });
      });
  }
}
