import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { from, Observable, of } from 'rxjs';
import { Menu } from './menu.model';
import { MenuStore, MenuState } from './menu.store';
import { concatMap, filter, reduce, tap, first, find } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MenuQuery extends QueryEntity<MenuState> {
  constructor(protected store: MenuStore) {
    super(store);
  }

  findByUrl(url: string): Observable<Menu[]> {
    // return this.selectAll({
    //   filterBy: ({ forwardUrl }) =>
    //     !!forwardUrl && (forwardUrl.includes(url) || url.includes(forwardUrl)),
    // });
    return of(this.getAll()).pipe(
      concatMap((menus: Menu[]) => from(menus)),
      concatMap((menu: Menu) => from(menu.subMenus)),
      first(({ forwardUrl }) => !!forwardUrl && forwardUrl.includes(url), null)
    );
  }
}
