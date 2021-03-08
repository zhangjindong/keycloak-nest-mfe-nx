import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NewsStore, NewsState } from './news.store';

@Injectable({ providedIn: 'root' })
export class NewsQuery extends QueryEntity<NewsState> {

  constructor(protected store: NewsStore) {
    super(store);
  }

}
