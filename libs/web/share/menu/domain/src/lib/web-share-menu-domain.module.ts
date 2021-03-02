import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MenuService } from './state/menu.service';

export const webShareMenuDomainRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [MenuService],
})
export class WebShareMenuDomainModule {}
