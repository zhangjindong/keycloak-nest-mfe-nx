import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvService } from './env.service';

/**
 * 1 Keycloak 页面初始化
 */
@NgModule({
  imports: [CommonModule],
  providers: [EnvService],
})
export class WebShareInitializeServiceModule {}
