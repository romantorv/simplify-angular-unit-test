import { ArticleResponse } from './url.service';

export class MockUrlService {
  articles = mockArticles.filter((article) => article.id === -1);
  apiRoot = 'mockAPIPath';
  fetchContents(): void {}
}

export const mockArticleResponse: ArticleResponse[] = [
  {
    createdAt: '2023-10-28T23:23:15.870Z',
    title: 'Title 1',
    createdBy: 'John Doe',
    content: 'Content 1',
    id: 1,
  },
  {
    createdAt: '2023-10-28T23:47:44.195Z',
    title: 'Title 2',
    createdBy: 'Doe John',
    content: 'Content 2',
    id: 2,
  },
];

export const mockArticles: Pick<
  ArticleResponse,
  'id' | 'title' | 'createdAt'
>[] = mockArticleResponse.map((article) => {
  return {
    id: article.id,
    title: article.title,
    createdAt: article.createdAt,
  };
});
