import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { MenuStore, MenuState } from './menu.store';

@Injectable({ providedIn: 'root' })
export class MenuService extends NgEntityService<MenuState> {
  constructor(protected store: MenuStore) {
    super(store);
  }
}
