import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbStore } from './breadcrumb.store';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  params: { [key: string]: any };
  public breadcrumbLabels: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  public newBreadcrumb: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject<
    Breadcrumb[]
  >([]);

  constructor(
    private breadcrumbStore: BreadcrumbStore,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadCrumbData();
  }
  breadCrumbData(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter((route) => route.outlet === PRIMARY_OUTLET))
      .subscribe((route) => {
        this.params = route.snapshot.params;
        this.updateData(route, null);
      });
  }

  private updateData(route, newBreadcrumb): void {
    if (route.snapshot.data.breadcrumb || newBreadcrumb) {
      const data = route.snapshot.data.breadcrumb
        ? route.snapshot.data.breadcrumb
        : newBreadcrumb;
      const breadcrumb = JSON.parse(JSON.stringify(data));
      breadcrumb.map((crumb) => {
        const urlChunks = crumb.url.split('/');
        for (const chunk of urlChunks) {
          if (chunk.includes(':')) {
            const paramID = chunk.replace(':', '');
            // const routerParamID = route.snapshot.params[paramID];
            const routerParamID = this.params[paramID];
            crumb.url = crumb.url.replace(`:${paramID}`, routerParamID);
          }
        }

        const labelParams = crumb.label.match(/[^{{]+(?=\}})/g);
        if (labelParams) {
          for (const labelParam of labelParams) {
            // const routerParamID = route.snapshot.params[labelParam.trim()];
            const routerParamID = this.params[labelParam.trim()];
            if (routerParamID) {
              crumb.label = crumb.label.replace(
                '{{' + labelParam + '}}',
                routerParamID
              );
            } else {
              // crumb.label = crumb.label.replace('{{' + labelParam + '}}', '');
            }
          }
        }
      });
      this.breadcrumbStore.remove();
      this.breadcrumbStore.add(breadcrumb);
    } else {
      this.breadcrumbStore.remove();
    }
  }
  updateBreadcrumbLabels(labels: any) {
    this.breadcrumbLabels.next(labels);
  }

  updateBreadcrumb(newBreadcrumb: Breadcrumb[]) {
    this.newBreadcrumb.next(newBreadcrumb);
  }
}
