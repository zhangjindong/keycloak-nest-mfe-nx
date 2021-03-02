import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MenuStore, MenuState } from './menu.store';

@Injectable({ providedIn: 'root' })
export class MenuQuery extends QueryEntity<MenuState> {
  constructor(protected store: MenuStore) {
    super(store);
  }
}
