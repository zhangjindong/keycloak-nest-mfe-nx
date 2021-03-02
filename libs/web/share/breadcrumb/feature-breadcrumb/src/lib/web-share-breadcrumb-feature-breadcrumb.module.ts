import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { WebShareBreadcrumbDomainModule } from '@mfe/web/share/breadcrumb/domain';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzBreadCrumbModule,
    NzIconModule,
    WebShareBreadcrumbDomainModule,
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
})
export class WebShareBreadcrumbFeatureBreadcrumbModule {}
