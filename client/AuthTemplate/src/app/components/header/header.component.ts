import { Component } from '@angular/core';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../../common/auth-config.service';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { AuthenticationService } from 'src/app/common/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private oauthService: OAuthService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
    this.oauthService.revokeTokenAndLogout();
  }
}
