import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BreadcrumbService } from './state/breadcrumb.service';

export const webShareBreadcrumbDomainRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [BreadcrumbService],
})
export class WebShareBreadcrumbDomainModule {}
