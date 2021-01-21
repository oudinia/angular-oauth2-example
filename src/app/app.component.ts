import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-oauth2-pkce';

  constructor(public oidcSecurityService: OidcSecurityService) {}

    ngOnInit() {
      this.oidcSecurityService.authorize();
        this.oidcSecurityService.checkAuth().subscribe((isAuthenticated) => {
            console.log('app authenticated', isAuthenticated);
            const at = this.oidcSecurityService.getToken();
            console.log(`Current access token is '${at}'`);
        });
    }
}
