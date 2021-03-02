import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  userDetails: KeycloakProfile;
  breadcrumb$;
  constructor(protected keycloakService: KeycloakService) {}
  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
  }
  async doLogout() {
    await this.keycloakService.logout();
  }
  async doRegister() {
    await this.keycloakService.register();
  }
  async doLogin() {
    await this.keycloakService.login();
  }
}
