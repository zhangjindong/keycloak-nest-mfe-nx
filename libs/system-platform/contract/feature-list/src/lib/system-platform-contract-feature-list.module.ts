import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SystemPlatformContractDomainModule } from '@mfe/system-platform/contract/domain';
import { WebShareBaseModule } from '@mfe/web/share/base';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    CommonModule,
    SystemPlatformContractDomainModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
    NzGridModule,
    RouterModule.forChild([{ path: '', component: ListComponent }]),
    WebShareBaseModule,
  ],
  declarations: [ListComponent],
  bootstrap: [ListComponent],
})
export class SystemPlatformContractFeatureListModule {}
