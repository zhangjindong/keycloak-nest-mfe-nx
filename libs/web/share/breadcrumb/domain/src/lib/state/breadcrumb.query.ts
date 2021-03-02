import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BreadcrumbStore, BreadcrumbState } from './breadcrumb.store';

@Injectable({ providedIn: 'root' })
export class BreadcrumbQuery extends QueryEntity<BreadcrumbState> {

  constructor(protected store: BreadcrumbStore) {
    super(store);
  }

}
