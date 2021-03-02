import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from '@mfe/web/share/initialize-service';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import {
  KeycloakInitializerProvide,
  WebShareInitializeServiceModule,
} from '@mfe/web/share/initialize-service';
import { KeycloakAngularModule } from 'keycloak-angular';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { WebShareMenuFeatureMenuSiderModule } from '@mfe/web/share/menu/feature-menu-sider';
import { WebShareBreadcrumbFeatureBreadcrumbModule } from '@mfe/web/share/breadcrumb/feature-breadcrumb';
registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzBadgeModule,
    KeycloakAngularModule,
    WebShareInitializeServiceModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    WebShareMenuFeatureMenuSiderModule,
    WebShareBreadcrumbFeatureBreadcrumbModule,
  ],
  providers: [
    KeycloakInitializerProvide,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: '/api' } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
