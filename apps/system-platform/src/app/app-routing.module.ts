import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'contract',

    // children: [
    //   {
    //     path: 'list',
    loadChildren: () =>
      import('@mfe/system-platform/contract/feature-list').then(
        (m) => m.SystemPlatformContractFeatureListModule
      ),
    data: {
      title: '基础合同',
      breadcrumb: [
        {
          label: '基础合同',
          url: '',
        },
      ],
    },

    //   },
    // ],
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('@mfe/system-platform/feature-welcome').then(
        (m) => m.SystemPlatformFeatureWelcomeModule
      ),
    data: {
      title: '欢迎',
      breadcrumb: [
        {
          label: '欢迎',
          url: '',
        },
      ],
    },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
