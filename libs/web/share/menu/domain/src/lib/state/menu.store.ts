import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Menu } from './menu.model';

export interface MenuState extends EntityState<Menu> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'menu' })
export class MenuStore extends EntityStore<MenuState> {
  constructor() {
    super();
  }
}
