import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, UrlSerializer } from '@angular/router';
import { MenuSiderComponent } from './menu-sider/menu-sider.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

export const webShareMenuFeatureMenuSiderRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
  ],
  declarations: [MenuSiderComponent],
  exports: [MenuSiderComponent],
})
export class WebShareMenuFeatureMenuSiderModule {}
