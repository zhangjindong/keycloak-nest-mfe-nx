import { Component, OnInit } from '@angular/core';
import {
  BreadcrumbQuery,
  BreadcrumbService,
} from '@mfe/web/share/breadcrumb/domain';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumb$ = this.breadcrumbQuery.selectAll();
  constructor(
    private breadcrumbQuery: BreadcrumbQuery,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {}
}
