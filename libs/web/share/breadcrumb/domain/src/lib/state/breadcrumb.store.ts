import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Breadcrumb } from './breadcrumb.model';

export interface BreadcrumbState extends EntityState<Breadcrumb> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'breadcrumb' })
export class BreadcrumbStore extends EntityStore<BreadcrumbState> {
  constructor() {
    super();
  }
}
