import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome/welcome-routing.module';

export const systemPlatformFeatureWelcomeRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, WelcomeRoutingModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class SystemPlatformFeatureWelcomeModule {}
