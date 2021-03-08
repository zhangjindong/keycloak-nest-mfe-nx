import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { NewsStore, NewsState } from './news.store';

@Injectable({ providedIn: 'root' })
export class NewsService extends NgEntityService<NewsState> {

  constructor(protected store: NewsStore) {
    super(store);
  }

}
